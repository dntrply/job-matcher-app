import { promises as fs } from 'fs';
import formidable from 'formidable-serverless';
import mammoth from 'mammoth';
// import pdfParse from 'pdf-parse';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser for file handling
  },
};

function flattenObject(ob) {
    let result = {};
  
    for (const i in ob) {
      if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
        const flatObject = flattenObject(ob[i]);
        for (const x in flatObject) {
          result[i + '.' + x] = flatObject[x];
        }
      } else {
        result[i] = ob[i];
      }
    }
    return result;
  }
  
  
  


export default async function handler(req, res) {
    // Handle CORS preflight request (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');      
        return res.status(200).end();
    }

  // CORS Support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

//    console.log('Request body:', req.body);
  const form = new formidable.IncomingForm();
//   console.log('form 1:', form);


  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing the file' });
    }

    console.log('Files:', files);

    // console.log('stringify form:', JSON.stringify(form));
    // console.log('form 2:', form);


    
    // console.log('fields:', JSON.stringify(fields.file));
    // console.log(flattenObject(fields.file));

    const file = files.file;

    console.log('Files:', files);


    try {
      let resumeText = '';

      // Using formidable to access the file buffer directly instead of path
      const fileBuffer = file && file.path ? await fs.readFile(file.path) : file;

      if (file.type === 'application/pdf') {
        const pdfData = await pdfParse(fileBuffer);
        resumeText = pdfData.text;
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type === 'application/msword') {
        const docText = await mammoth.extractRawText({ buffer: fileBuffer });
        resumeText = docText.value;
      } else {
        return res.status(400).json({ message: 'Unsupported file type' });
      }

      res.status(200).json({ resumeText });
    } catch (error) {
      console.error('Error processing file:', error);
      res.status(500).json({ message: 'Error processing the file' });
    }
  });
}
