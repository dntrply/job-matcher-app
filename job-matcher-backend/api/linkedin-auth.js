import axios from 'axios';

export default async function handler(req, res) {
    console.log('LinkedIn OAuth req:', req);
    const { code } = req.query;  // Retrieves the code from the query string

    if (!code) {
        return res.status(400).json({ message: 'Authorization code not provided' });
    }

    try {
        // Step 1: Exchange Authorization Code for Access Token
        const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: process.env.REDIRECT_URI, // Your Vercel or ngrok URL
                client_id: process.env.LINKEDIN_CLIENT_ID,
                client_secret: process.env.LINKEDIN_CLIENT_SECRET,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const { access_token } = tokenResponse.data;

        // Step 2: Use Access Token to Fetch LinkedIn Profile Data
        const profileResponse = await axios.get('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        // Step 3: Send Profile Data Back to Frontend
        res.status(200).json(profileResponse.data);

    } catch (error) {
        console.error('Error during LinkedIn OAuth:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
