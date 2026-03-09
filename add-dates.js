import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsFilePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');

// Add date field to the interface
blogsContent = blogsContent.replace(
  '  content: string;\n}',
  '  content: string;\n  date: string;\n}'
);

// Add date to each blog post
// We'll generate a date based on the ID to keep it consistent
// Starting from Jan 1, 2024, adding 1 day per post
const startDate = new Date('2024-01-01T08:00:00Z');

let match;
const idRegex = /"id":\s*(\d+),/g;
let newContent = '';
let lastIndex = 0;

while ((match = idRegex.exec(blogsContent)) !== null) {
  const id = parseInt(match[1]);
  const postDate = new Date(startDate.getTime() + (id * 24 * 60 * 60 * 1000));
  const dateString = postDate.toISOString().split('T')[0];
  
  newContent += blogsContent.substring(lastIndex, match.index + match[0].length);
  newContent += `\n    "date": "${dateString}",`;
  lastIndex = match.index + match[0].length;
}

newContent += blogsContent.substring(lastIndex);

fs.writeFileSync(blogsFilePath, newContent);
console.log('Added dates to blogs.ts');
