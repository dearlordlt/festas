var fs = require('fs');

fs.readdir('./', function(err, files) {
    if(err) {
        return 0;
    } else {
        console.log(JSON.stringify(files, null, 2));
    }
})