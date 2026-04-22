#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

async function build() {
  const { minify: minifyHtml }  = await import('html-minifier-terser');
  const CleanCSS                = require('clean-css');
  const { minify: minifyJs }    = require('terser');

  // Clean output
  fs.rmSync('dist', { recursive: true, force: true });
  fs.mkdirSync('dist', { recursive: true });

  // Copy assets (images, fonts, etc.)
  copyDir('src/assets', 'dist/src/assets');

  // Minify CSS
  const css    = fs.readFileSync('site.css', 'utf8');
  const minCss = new CleanCSS({ level: 2 }).minify(css).styles;
  fs.writeFileSync('dist/site.css', minCss);
  console.log(`site.css  ${kb(css)} → ${kb(minCss)}`);

  // Minify JS
  const js    = fs.readFileSync('site.js', 'utf8');
  const minJs = await minifyJs(js, { compress: true, mangle: true });
  fs.writeFileSync('dist/site.js', minJs.code);
  console.log(`site.js   ${kb(js)} → ${kb(minJs.code)}`);

  // Minify HTML
  const html    = fs.readFileSync('index.html', 'utf8');
  const minHtml = await minifyHtml(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: false,
    minifyJS: false,
  });
  fs.writeFileSync('dist/index.html', minHtml);
  console.log(`index.html ${kb(html)} → ${kb(minHtml)}`);

  console.log('\nBuild complete → dist/');
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

function kb(str) {
  return (Buffer.byteLength(str, 'utf8') / 1024).toFixed(1) + ' kB';
}

build().catch(err => { console.error(err); process.exit(1); });
