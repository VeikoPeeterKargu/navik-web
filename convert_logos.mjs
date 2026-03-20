#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const SVG_DIR = '/Users/vpk/Desktop/Navik logod/SVG';
const PNG_DIR = '/Users/vpk/Desktop/Navik logod/PNG';
const PDF_DIR = '/Users/vpk/Desktop/Navik logod/PDF';

fs.mkdirSync(PNG_DIR, { recursive: true });
fs.mkdirSync(PDF_DIR, { recursive: true });

async function convertAll() {
  const browser = await chromium.launch();
  const svgFiles = fs.readdirSync(SVG_DIR).filter(f => f.endsWith('.svg')).sort();
  
  console.log(`\nConverting ${svgFiles.length} SVG files...`);
  
  for (const svgFile of svgFiles) {
    const svgContent = fs.readFileSync(path.join(SVG_DIR, svgFile), 'utf-8');
    const vbMatch = svgContent.match(/viewBox="0 0 (\d+) (\d+)"/);
    const w = vbMatch ? parseInt(vbMatch[1]) : 200;
    const h = vbMatch ? parseInt(vbMatch[2]) : 100;
    
    let bgColor = '#FFFFFF';
    if (svgFile.includes('-light') && !svgFile.includes('transparent')) bgColor = '#1A1A18';
    else if (svgFile.includes('-cream')) bgColor = '#F8F5EE';
    else if (svgFile.includes('transparent')) bgColor = 'transparent';

    const scale = 4;
    const page = await browser.newPage();
    
    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; }
  body { background: ${bgColor}; width: ${w * scale}px; height: ${h * scale}px; overflow: hidden; }
  svg { width: ${w * scale}px !important; height: ${h * scale}px !important; display: block; }
  svg text { font-family: 'Cormorant Garamond', Georgia, serif !important; }
</style>
</head>
<body>${svgContent}</body>
</html>`;

    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: w * scale, height: h * scale });
    await page.waitForTimeout(800);

    const pngPath = path.join(PNG_DIR, svgFile.replace('.svg', '.png'));
    const omitBg = svgFile.includes('transparent');
    await page.screenshot({ path: pngPath, omitBackground: omitBg });
    console.log(`  ✓ PNG: ${svgFile.replace('.svg', '.png')}`);

    await page.close();
  }

  // Create combined PDF with all logo variants for print/brand guide
  console.log('\nCreating PDF brand guide...');
  const pdfPage = await browser.newPage();
  const allSvgsHtml = svgFiles
    .filter(f => f.includes('-dark.') || f.includes('-light.') || f.includes('-cream.'))
    .map(f => {
      const svg = fs.readFileSync(path.join(SVG_DIR, f), 'utf-8');
      let bg = '#FFFFFF';
      if (f.includes('-light.')) bg = '#1A1A18';
      else if (f.includes('-cream.')) bg = '#F8F5EE';
      return `<div style="background:${bg};padding:40px;margin:20px 0;display:inline-block;page-break-inside:avoid;border-radius:4px;">
        <p style="font-family:monospace;font-size:10px;color:#666;margin-bottom:8px;">${f}</p>
        ${svg}
      </div>`;
    }).join('\n');

  await pdfPage.setContent(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<style>
  body { font-family: sans-serif; padding: 40px; background: #f5f5f5; }
  h1 { font-family: Georgia, serif; font-weight: 300; font-size: 28px; margin-bottom: 8px; }
  p { color: #666; font-size: 12px; margin-bottom: 30px; }
  svg text { font-family: 'Cormorant Garamond', Georgia, serif !important; }
</style>
</head>
<body>
<h1>NAVIK — Logod ja brändimaterjal</h1>
<p>Versioonid tumeda, heleda ja kreemja taustal. Loodud: ${new Date().toLocaleDateString('et-EE')}</p>
${allSvgsHtml}
</body>
</html>`, { waitUntil: 'networkidle' });

  await pdfPage.waitForTimeout(1500);
  await pdfPage.pdf({
    path: path.join(PDF_DIR, 'NAVIK-logod-brandguide.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
  });
  console.log('  ✓ PDF: NAVIK-logod-brandguide.pdf');

  await browser.close();
  
  const pngCount = fs.readdirSync(PNG_DIR).length;
  console.log(`\n✅ Valmis!`);
  console.log(`   SVG: ${svgFiles.length} faili → ${SVG_DIR}`);
  console.log(`   PNG: ${pngCount} faili → ${PNG_DIR}`);
  console.log(`   PDF: 1 fail  → ${PDF_DIR}`);
}

convertAll().catch(e => { console.error(e); process.exit(1); });
