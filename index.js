// configuration 

const revealjsdir = '';
const firstSlideLocation = './slides/index.adoc';
const outputDir = 'docs/slides-v2/';

// clean 


// Load asciidoctor.js and asciidoctor-reveal.js
const asciidoctor = require('asciidoctor.js')();
const asciidoctorRevealjs = require('asciidoctor-reveal.js');
asciidoctorRevealjs.register()


// create  directory


// Convert the document 'presentation.adoc' using the reveal.js converter
const options = {safe: 'safe', backend: 'revealjs'};
asciidoctor.convertFile(firstSlideLocation, options); // (1)


