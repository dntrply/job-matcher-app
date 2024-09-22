import axios from 'axios';
import 'dotenv/config';

export default async function handler(req, res) {
    // Handle CORS preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');      
        return res.status(200).end();
    }

    // Set CORS headers for POST requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { resume, jobDescription, systemPrompt } = req.body;

    if (!resume || !jobDescription) {
        return res.status(400).json({ message: 'Resume and job description are required.' });
    }

    // console.log('Resume:', resume);
    // console.log('Job Description:', jobDescription);
    // console.log('System Prompt:', systemPrompt);

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: `Resume: ${resume}\n\nJob Description: ${jobDescription}\n\nMatch Score:` }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        // console.log('OpenAI Response:', response.data);

    // Parse the response to extract matchScore and matches
    const responseData = JSON.parse(response.data.choices[0].message.content.trim());

    console.log('Response Data:', responseData);
    const matchScore = responseData.matchScore;
    const matches = responseData.matches;

    // Send the parsed data back to the front end
    res.status(200).json({ matchScore, matches });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}
