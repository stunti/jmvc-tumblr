module("jmvc-tumblr test", { 
	setup: function(){
		S.open("//jmvc-tumblr/jmvc-tumblr.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});