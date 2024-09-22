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

    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
        return res.status(400).json({ message: 'Resume and job description are required.' });
    }

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: `Compare the resume and job description and return a match score. Do nt add any rational.\n\nResume: ${resume}\n\nJob Description: ${jobDescription}\n\nMatch Score:` }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const matchScore = response.data.choices[0].message.content.trim();
        res.status(200).json({ matchScore });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}
