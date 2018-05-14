const fs = require('fs');
const PdfPrinter = require('pdfmake');
const fonts = {
  Roboto: {
    normal: './assets/fonts/Roboto-Regular.ttf',
    bold: './assets/fonts/Roboto-Medium.ttf',
    italics: './assets/fonts/Roboto-Italic.ttf',
    bolditalics: './assets/fonts/Roboto-MediumItalic.ttf'
  }
};
const printer = new PdfPrinter(fonts);

function createPDF() {
  const docDefinition = {
    content: [
      { text: 'Some Document Title', style: 'header' },
      {
        columns: [
          { text: 'Deliver to ', width: 'auto' },
          { text: ' Mr.Smith', width: 'auto' },
        ]
      },
      {
        columns: [
          { text: 'Received by ', width: 'auto' },
          { text: ' need data', width: 'auto', style: 'errorField' },
        ]
      }
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true
      },
      errorField: {
        color: 'red',
      }
    }
  };
  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream('./assets/generated/pdfMake.pdf'));
  pdfDoc.end();
}

module.exports = createPDF;
