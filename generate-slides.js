const util = require('util');
const fs = require('fs');
const rimraf = require('rimraf');
const ncp = require('ncp').ncp;
const ncpPromise = util.promisify(ncp);

// Configuration 
const mainSlideLocation = './slides/asciidoc/index.adoc';
const outputDir = 'docs/slides/';
const directoryToCopy = [
    'theme',
    'fonts',
    'images',
    'screencasts',
];

// Clean 
if (fs.existsSync(outputDir)) {
    rimraf.sync(outputDir);
}

// Create slides directory
fs.mkdirSync(outputDir);

Promise.all(directoryToCopy.map(path => {

    ncpPromise(`./slides/${path}`, `${outputDir}${path}`);

})).then(() => {

    // Load asciidoctor.js and asciidoctor-reveal.js
    const asciidoctor = require('asciidoctor.js')();
    const asciidoctorRevealjs = require('asciidoctor-reveal.js');
    asciidoctorRevealjs.register()

    // Convert the document 'index.adoc' using the reveal.js converter
    const options = {safe: 'safe', backend: 'revealjs', to_dir: outputDir};
    asciidoctor.convertFile(mainSlideLocation, options); // (1)

})
