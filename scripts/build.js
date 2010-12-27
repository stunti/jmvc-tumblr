//steal/js jmvc-tumblr/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('jmvc-tumblr/scripts/build.html',{to: 'jmvc-tumblr'});
});
