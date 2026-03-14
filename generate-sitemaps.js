import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'src', 'data', 'blogs.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const arrayStart = content.indexOf('[');
const arrayString = content.substring(arrayStart, content.lastIndexOf(']') + 1);

// Evaluate the array
const getBlogs = new Function(`return ${arrayString}`);
const blogs = getBlogs();

const baseUrl = 'https://www.lumetraanalytics.com';

// 1. Generate sitemap.xml
let xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xmlSitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/diagnostic', priority: '0.8', changefreq: 'monthly' },
  { path: '/book-call', priority: '0.8', changefreq: 'monthly' }
];

for (const page of staticPages) {
  xmlSitemap += `  <url>\n`;
  xmlSitemap += `    <loc>${baseUrl}${page.path}</loc>\n`;
  xmlSitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xmlSitemap += `    <priority>${page.priority}</priority>\n`;
  xmlSitemap += `  </url>\n`;
}

for (const blog of blogs) {
  xmlSitemap += `  <url>\n`;
  xmlSitemap += `    <loc>${baseUrl}/blog/${blog.slug}</loc>\n`;
  xmlSitemap += `    <lastmod>${blog.date}</lastmod>\n`;
  xmlSitemap += `    <changefreq>monthly</changefreq>\n`;
  xmlSitemap += `    <priority>0.6</priority>\n`;
  xmlSitemap += `  </url>\n`;
}

xmlSitemap += `</urlset>`;
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xmlSitemap);

// 2. Generate sitemap.html
let htmlSitemap = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Sitemap - Lumetra Analytics</title>
  <meta name="robots" content="index, follow">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; padding: 2rem; max-width: 800px; margin: auto; background: #050505; color: #d4d4d8; }
    h1, h2 { color: #ffffff; font-weight: 300; }
    a { color: #5B8FB9; text-decoration: none; }
    a:hover { color: #D4AF37; text-decoration: underline; }
    ul { list-style-type: none; padding-left: 0; }
    li { margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; }
  </style>
</head>
<body>
  <h1>Lumetra Analytics - Sitemap</h1>
  
  <h2>Main Pages</h2>
  <ul>
    ${staticPages.map(p => `<li><a href="${p.path || '/'}">${p.path === '' ? 'Home' : p.path.substring(1).replace('-', ' ').replace(/\\b\\w/g, l => l.toUpperCase())}</a></li>`).join('\n    ')}
  </ul>

  <h2>Blog Posts (${blogs.length} articles)</h2>
  <ul>
    ${blogs.map(b => `<li><a href="/blog/${b.slug}">${b.title}</a> <span style="font-size: 0.8em; color: #71717a;">(${b.category})</span></li>`).join('\n    ')}
  </ul>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.html'), htmlSitemap);

// 3. Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap.html
`;
fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsTxt);

console.log(`Successfully generated sitemap.xml and sitemap.html with ${blogs.length + staticPages.length} URLs, and updated robots.txt.`);
