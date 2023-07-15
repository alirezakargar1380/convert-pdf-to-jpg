// const PDF2Pic = require('pdf-poppler').PDF2Pic;

// const pdfPath = '/test.pdf';  // Replace with the path to your PDF file
// const outputPath = '/image.png';  // Replace with the desired output path

// const pdf2pic = new PDF2Pic({
//     density: 300,             // Set the image density (default: 600)
//     format: 'png',            // Set the output image format (default: 'jpg')
//     size: '1024x768',         // Set the image size (default: '1024x768')
//     outputDirectory: outputPath,
// });

// pdf2pic.convert(pdfPath, 1).then((resolve) => {
//     console.log('Image conversion successful!');
//     console.log('Converted page:', resolve);
// }).catch((error) => {
//     console.error('Error converting PDF to image:', error);
// });

const path = require('path');
const pdf = require('pdf-poppler');

let file = 'test.pdf'

let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: '/',
    page: 1 // just convert page 1
}

pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })