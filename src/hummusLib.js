const hummus = require('hummus');
const fs = require('fs');
const file = './assets/generated/hummus.pdf';

function getTextOptions(font) {
  return {
    font: font,
    size: 14,
    colorspace: 'gray',
    color: 0x00,
  };
}


function writeTextRow(ctx, title, y, font, data) {
  ctx.writeText(title, 10, y, getTextOptions(font));

  const textDimensions = font.calculateTextDimensions(title, 14);
  const hasData = data && data.length > 0;
  const options = { ...getTextOptions(font), underline: true, color: hasData ? 'black' : 'red' };
  ctx.writeText(hasData ? data : 'need data', 15 + textDimensions.xMax, y, options);
}

function createPDF() {
  fs.appendFile(file, '', function (err) {
    if (err) {
      console.log(err);
      return;
    }

    const pdfWriter = hummus.createWriter(file);
    const page = pdfWriter.createPage(0, 0, 595, 842);
    const ctx = pdfWriter.startPageContentContext(page);
    const arialFont = pdfWriter.getFontForFile('./assets/arial.ttf');
    ctx.writeText('Some Document Title', 10, 805, { ...getTextOptions(arialFont), size: 24 });

    writeTextRow(ctx, 'Delivery to ', 755, arialFont, 'Mr. Smith');
    writeTextRow(ctx, 'Received by ', 735, arialFont);

    pdfWriter.writePage(page);
    pdfWriter.end();
  });
}

module.exports = createPDF;
