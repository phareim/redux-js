var http = require("http");
var url  = require("url");

function start(route, handle){

  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("** " + pathname );

    var postData = "";

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("* POST " + postDataChunk);
    });

    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
  };

  http.createServer(onRequest).listen(process.env.PORT);
  console.log("*");
};

exports.start = start;