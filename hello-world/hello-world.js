var HelloWorld = function(){
	this.hello = function(){
		return "Hello, World!";
	}
	this.lengthOfString = function(input){
		return input.length;
	}
}

module.exports = HelloWorld;