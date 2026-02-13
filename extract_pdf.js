const fs = require('fs');
const pdf = require('pdf-parse');

async function extractText(filePath) {
    console.log(`Attempting to extract text from: ${filePath}`);
    if (!fs.existsSync(filePath)) {
        console.error(`File does not exist: ${filePath}`);
        return;
    }
    try {
        const dataBuffer = fs.readFileSync(filePath);
        // pdf-parse can be called directly or with options
        const data = await pdf(dataBuffer);
        console.log(`--- START OF ${filePath} ---`);
        console.log(data.text);
        console.log(`--- END OF ${filePath} ---`);
    } catch (error) {
        console.error(`Error extracting text from ${filePath}:`, error);
    }
}

const files = [
    'IS4660-MiniProject-Continuous Assesemnt-02012026-V1.1.pdf',
    'markdown-preview.pdf',
    'Shuttlemate Payment Data protection & Transaction Security - 215068P   .pdf'
];

async function run() {
    for (const file of files) {
        await extractText(file);
    }
}

run();
