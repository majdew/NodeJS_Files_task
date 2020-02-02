var fs = require('fs');
var dir = './testwatch';
var file = './testwatch/myfile.txt';
var innerdir = './testwatch/inner';
var filename=process.argv[2];
console.log(filename);

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.mkdirSync(innerdir);
    fs.writeFile(filename , 
        )
}
fs.readdir(dir, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});


fs.watch(dir, (curr , prev)=>{
    console.log(`${file} has been changed `);
    console.log("before:" + prev);
    console.log("after:" + curr);
});

