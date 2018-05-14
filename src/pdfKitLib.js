const fs = require('fs');
const PDFDocument = require('pdfkit');


function createPDF() {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream('assets/generated/pdfkit.pdf'));

  doc
    .fontSize(25)
    .text('Some Document Title!', 0, 0);


  doc
    .fontSize(14)
    .moveDown()
    .text('Deliver to ', { continued: true })
    .text('Mr. Smith', { underline: true });

  doc
    .moveDown()
    .text('Received by ', { continued: true })
    .fillColor('red')
    .text('need data', { underline: true });

  doc.end();
}

module.exports = createPDF;
