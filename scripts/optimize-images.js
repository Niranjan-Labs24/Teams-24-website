const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const DEFAULT_CONFIG = {
  quality: 80,
  formats: ['webp', 'avif'],
  widths: [640, 768, 1024, 1280, 1920],
  maxWidth: 1920,
  maxHeight: 1920,
};

async function optimizeImage(inputPath, outputDir, config = {}) {
  const opts = { ...DEFAULT_CONFIG, ...config };
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, ext);
  
  if (ext === '.webp' || ext === '.avif') {
    console.log(`⏭️  Skipping already optimized: ${basename}${ext}`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 Processing: ${basename}${ext}`);
    console.log(`   Original size: ${(metadata.size / 1024).toFixed(2)} KB`);
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);

    let width = metadata.width;
    let height = metadata.height;
    
    if (width > opts.maxWidth || height > opts.maxHeight) {
      const ratio = Math.min(opts.maxWidth / width, opts.maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
      console.log(`   Resizing to: ${width}x${height}`);
    }

    for (const format of opts.formats) {
      const outputPath = path.join(outputDir, `${basename}.${format}`);
      
      let pipeline = image.clone().resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });

      if (format === 'webp') {
        pipeline = pipeline.webp({ 
          quality: opts.quality,
          effort: 6,
        });
      } else if (format === 'avif') {
        pipeline = pipeline.avif({ 
          quality: opts.quality,
          effort: 4,
        });
      }

      await pipeline.toFile(outputPath);
      const stats = await fs.stat(outputPath);
      const savings = ((1 - stats.size / metadata.size) * 100).toFixed(1);
      console.log(`   ✅ ${format.toUpperCase()}: ${(stats.size / 1024).toFixed(2)} KB (${savings}% smaller)`);
    }

    if (opts.widths && opts.widths.length > 0) {
      console.log(`   📱 Creating responsive sizes...`);
      for (const targetWidth of opts.widths) {
        if (targetWidth >= width) continue;
        
        for (const format of opts.formats) {
          const responsivePath = path.join(
            outputDir, 
            `${basename}-${targetWidth}w.${format}`
          );
          
          let pipeline = image.clone().resize(targetWidth, null, {
            fit: 'inside',
            withoutEnlargement: true,
          });

          if (format === 'webp') {
            pipeline = pipeline.webp({ quality: opts.quality, effort: 6 });
          } else if (format === 'avif') {
            pipeline = pipeline.avif({ quality: opts.quality, effort: 4 });
          }

          await pipeline.toFile(responsivePath);
        }
      }
    }

  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function optimizeDirectory(inputDir, outputDir, config = {}) {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
    
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('No images found in', inputDir);
      return;
    }

    console.log(`\n🚀 Found ${imageFiles.length} image(s) to optimize\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath, outputDir, config);
    }

    console.log(`\n✨ Optimization complete! Check ${outputDir}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const inputDir = args[0] || './assets';
  const outputDir = args[1] || './public/optimized';
  
  const config = {};
  const qualityIndex = args.indexOf('--quality');
  if (qualityIndex !== -1 && args[qualityIndex + 1]) {
    config.quality = parseInt(args[qualityIndex + 1]);
  }
  
  const widthIndex = args.indexOf('--width');
  if (widthIndex !== -1 && args[widthIndex + 1]) {
    config.maxWidth = parseInt(args[widthIndex + 1]);
  }

  optimizeDirectory(inputDir, outputDir, config);
}

module.exports = { optimizeImage, optimizeDirectory };
