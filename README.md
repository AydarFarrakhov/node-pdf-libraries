# Node js Libraries for generating PDF
## Libraries
* [node-html-pdf](https://github.com/marcbachmann/node-html-pdf)
* [PDFKit](https://github.com/devongovett/pdfkit)
* [HummusJS](https://github.com/galkahana/HummusJS)
* [pdf-fill-form](https://github.com/tpisto/pdf-fill-form)

### [node-html-pdf](https://github.com/marcbachmann/node-html-pdf) MIT
#### Description
HTML to PDF converter that uses phantomjs

#### Additional requirements
[PhantomJS](http://phantomjs.org/)

#### Pros
* Can use all power of CSS and HTML
* Easy to use
* Can be used by some javascript templates (e.g. EJS)

#### Cons
* Can't edit existing PDF
* Can't create native PDF forms
* Needs PhantomJS

### [PDFKit](https://github.com/devongovett/pdfkit) MIT

#### Description
A JavaScript PDF generation library for Node and the browser.

#### Pros
* Doesn't have additional requirements
* Good API for creating PDF by JavaScript

#### Cons
* Can't edit existing PDF
* Can't create native PDF forms
* Need to create PDF by calling library API functions
* Can't use templates

### [HummusJS](https://github.com/galkahana/HummusJS) Apache 2.0
#### Description
A Fast NodeJS Module for Creating, Parsing an Manipulating PDF Files and Streams.

#### Pros
* [Very flexible](https://github.com/galkahana/HummusJS/wiki/Extensibility)
* Can edit PDF

#### Cons
* Need to implement own component for PDF forms
* API is not easy
* It is hard to read documentation

### [pdf-fill-form](https://github.com/tpisto/pdf-fill-form) MIT
#### Description
PDF Fill Form (pdf-fill-form) is Node.js native C++ library for filling PDF forms. Created PDF file is returned back as Node.js Buffer object for further processing or saving - whole process is done in memory. Library offers methods to return filled PDF also as PDF file where pages are converted to images.

#### Additional requirements
Libary uses internally Poppler QT5 for PDF form reading and filling. Cairo is used for PDF creation from page images (when parameter { "save": "imgpdf" } is used).

#### Pros
* Can fill PDF forms with value

#### Cons
* Only can fill PDF forms
* Can't highlight fields with errors
