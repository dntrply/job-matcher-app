import OpenAI from 'openai';
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

    // Initialize OpenAI API client
    // Initialize OpenAI API client
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: `Resume: ${resume}\n\nJob Description: ${jobDescription}\n\nMatch Score:` }
            ],
        });

        let responseContent = response.choices[0].message.content;
        console.log('OpenAI Response:', responseContent);

        // Remove backticks from the response content
        responseContent = responseContent.replace(/```json|```/g, '').trim();

        // Parse the cleaned response content as JSON
        const responseData = JSON.parse(responseContent);

        console.log('Parsed Response Data:', responseData);
        const matchScore = responseData.matchScore;
        const matches = responseData.matches;

        // Send the parsed data back to the front end
        res.status(200).json({ matchScore, matches });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
}