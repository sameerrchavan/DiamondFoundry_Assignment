const fsextra = require('fs-extra');

const outputPath = 'app';


fsextra.copy('src/index.html', `${outputPath}/index.html`, (err) => {
  if (err) {
    console.log('An error occured while copying index.html ');
  }
});
