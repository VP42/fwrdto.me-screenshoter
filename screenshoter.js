var webshot = require('webshot');
var uuidv4 = require('uuid/v4');

var options = {
	streamType: "jpg",
	renderDelay: 3000,
	timeout: 30000,
	screenSize: {
		width: 1280, 
		height: 800
	}, 
	shotSize: {
  		width: 1280, 
  		height: 800
  	},
  	userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
};

if (!process.argv.slice(2)[0] || !process.argv.slice(2)[1])
	return;

var url = process.argv.slice(2)[0].replace(/^(https?:|)\/\//,'');
var filename = uuidv4() + ".jpg";
var destination = process.argv.slice(2)[1] + filename;

webshot(url, destination, options, function(err) {
  if (!err) {
  	console.log(filename);
  }
});