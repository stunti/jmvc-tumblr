//js jmvc-tumblr/scripts/doc.js

load('steal/rhino/steal.js');
steal.plugins("documentjs").then(function(){
	DocumentJS('jmvc-tumblr/jmvc-tumblr.html');
});