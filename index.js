const sass = require('node-sass')
const fs = require('fs')

sass.render({
    file: './scss/typing.scss',
    outFile: './new/type.min.css',
    outputStyle: 'compressed'
  }, function(error, result) { // node-style callback from v3.0.0 onwards
    if (error) {
      console.log(error.status); // used to be "code" in v2x and below
      console.log(error.column);
      console.log(error.message);
      console.log(error.line);
    }
    else {
        fs.writeFile('./new/type.min.css', result.css, function(err){
            if(!err){
                
            }else{
                console.log(err)
            }
        });
        console.log('success')
    }
  });