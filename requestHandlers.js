var exec = require("child_process").exec;
var buildhtml = require("./buildhtml.js");
var querystring = require("querystring");


function start(response, postData) {
  console.log("*** start");

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Submit text" />'+
      '</form>'+
      '</body>'+
      '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}


function upload(response, postData){
  console.log("*** upload");

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<p>' +
      querystring.parse(postData).text +
      '</p>' +
      '</body>'+
      '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
};

function ls(response){
  console.log("*** start.");

  exec("ls -lah", function(error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    //buildhtml.build(stdout, response.write);
    response.write(stdout);
    response.end();
  });
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;