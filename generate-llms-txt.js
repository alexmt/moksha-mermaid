#!/usr/bin/env node
'use strict';

const fs = require('fs');

function stripTags(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gis, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gis, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&raquo;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '-')
    .replace(/&[a-z]+;/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractSection(html, id) {
  const re = new RegExp(`<section[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/section>`, 'i');
  const m = html.match(re);
  return m ? stripTags(m[1]) : '';
}

function extractMeta(html, name) {
  const m = html.match(new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]+)"`, 'i'));
  return m ? m[1] : '';
}

function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  return m ? m[1].trim() : '';
}

function extractFooter(html) {
  const m = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
  return m ? stripTags(m[1]) : '';
}

function generate(srcPath = 'index.html') {
  const html = fs.readFileSync(srcPath, 'utf8');

  const title       = extractTitle(html);
  const description = extractMeta(html, 'description');
  const keywords    = extractMeta(html, 'keywords');

  const sections = [
    { id: 'about',    heading: 'About Vanessa' },
    { id: 'services', heading: 'How I Work'    },
    { id: 'who',      heading: 'Who I Serve'   },
    { id: 'expect',   heading: 'What to Expect' },
  ];

  let out = `# ${title}\n\n`;
  out += `> ${description}\n\n`;

  for (const { id, heading } of sections) {
    const text = extractSection(html, id);
    if (text) out += `## ${heading}\n\n${text}\n\n`;
  }

  const footer = extractFooter(html);
  if (footer) out += `## Contact\n\n${footer}\n\n`;

  out += `## Links\n\n- Website: https://iamthat.love/\n`;
  if (keywords) out += `\n<!-- keywords: ${keywords} -->\n`;

  return out;
}

function run(outPath = 'llms.txt') {
  const content = generate();
  fs.writeFileSync(outPath, content);
  const kb = (Buffer.byteLength(content, 'utf8') / 1024).toFixed(1);
  console.log(`llms.txt  generated → ${outPath} (${kb} kB)`);
  return content;
}

module.exports = { generate, run };

if (require.main === module) run();
