const ejs = require('ejs');
const pdf = require('html-pdf');
const options = { format: 'Letter' };

function createPDF() {

  ejs.renderFile('./assets/htmltopdf.ejs', {name: "Mr. Smith"}, {}, function(err, html){
    pdf.create(html, options).toFile('./assets/generated/htmltopdf.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  });
}

module.exports = createPDF;
