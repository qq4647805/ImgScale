var n;process.argv[2]?n=process.argv[2]:n=1;
var Jimp = require("jimp");
const Imagemin = require('imagemin');
new Imagemin()
    .src('src/**/**.{gif,jpg,png,svg}')
    .dest('dist/')
    .run((err, files) => {
    	files.forEach(function(el) {
    		var path=el.path;
            var arr=path.match(/(dist.*\\)(.+)(\.(gif|jpg|png|svg))/);
            // return;
            var a_path=arr[1];
            var f_name=arr[2];
            var suffix=arr[3];
    		Jimp.read(path, function (err, lenna) {
    		    if (err) throw err;
                lenna.scale(1/n).write(a_path+f_name+suffix).scale(2).write(a_path+f_name+'@2x'+suffix).scale(1.5).write(a_path+f_name+'@3x'+suffix);
    		});
    	});
    });