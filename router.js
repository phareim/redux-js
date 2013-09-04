function route(handle, pathname, response, postData){
  if(typeof handle[pathname] ==='function'){
    return handle[pathname](response, postData);
  }
  else{
  	console.log("These are not the droids you're looking for.");
  	response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 - " + pathname +" is not the droid you are looking for.");
    response.end();

  };
};

exports.route = route;