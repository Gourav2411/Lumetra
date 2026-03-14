import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, 'src', 'data', 'generated-blogs.json');
const newBlogs = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

const blogsFilePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');

const arrayEndIndex = blogsContent.lastIndexOf('];');
if (arrayEndIndex !== -1) {
  const beforeEnd = blogsContent.substring(0, arrayEndIndex).trim();
  const needsComma = !beforeEnd.endsWith(',');

  // Process in chunks to avoid memory issues with huge strings
  const chunkSize = 1000;
  let insertString = needsComma ? ',\n' : '\n';
  
  for (let i = 0; i < newBlogs.length; i += chunkSize) {
    const chunk = newBlogs.slice(i, i + chunkSize);
    insertString += chunk.map(b => JSON.stringify(b, null, 2)).join(',\n') + (i + chunkSize < newBlogs.length ? ',\n' : '\n');
  }

  const updatedContent = blogsContent.substring(0, arrayEndIndex) + insertString + blogsContent.substring(arrayEndIndex);
  fs.writeFileSync(blogsFilePath, updatedContent);
  console.log(`Successfully appended ${newBlogs.length} blogs to blogs.ts.`);
} else {
  console.error('Could not find the end of the blogs array.');
}
