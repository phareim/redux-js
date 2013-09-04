function build(content, write){
	write( "<!doctype HTML>" +
				 "<html>" +
				 head() + 
				 body(content) +
				 "</html>");
};

function head(){
	return "<head></head>";
}

function body(content){
	return "<body>" + content + "</body>";
}

function h1(content, write){

};

exports.build = build;