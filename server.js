var http = require("http"), // easy use of Node's HTTP API
    url = require("url"), // utilities for URL resolution and parsing
    path = require("path"), // utilities for handling and transforming filepaths
    fs = require("fs") //File System utilities for I/O, ensures POSIX happiness
    port = process.argv[2] || 3000; //process.argv = array of command line arguments

http.createServer(function(req, res) { //all of this below returns the new web server object

  var uri = url.parse(req.url).pathname //takes the URL string and returns an object
    , filename = path.join(process.cwd(), uri); // joins args into a normalized path


  // var filePath = '.' + req.url;
  // if (filePath == './')
  //   filePath = './index.html';

  // error checking, a.k.a. The Dreaded 404
  fs.exists(filename, function(exists) { // tests whether a path exists in the file system
    if(!exists) { // if the filepath does not exist... 404!!!
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404: Not Found \n");
      res.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html'; //default to index.html in a directory

    // this asynchronously reads file contents, give a 500 is a problem exists
    // per Wikipedia, about 500: "an unexpected condition was encountered and no more specific message is suitable
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(err + "\n");
        res.end();
        return;
      }

      // if we make it this far with no 404 or 500, time for the 200 Happy Dance
      res.writeHead(200);
      res.write(google, "binary"); // whoomp, there it is
      res.end(file);
    });
  });
}).listen(process.env.PORT || 3000);

console.log("Static file server running at localhost:3000")

var google = '<a href="http://www.google.com">Google</a>';
