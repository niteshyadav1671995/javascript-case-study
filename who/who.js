function Who(){
	this.name = function(input){
		if(input==undefined){
			return "One for you, one for me."
		}
		return "One for "+input+", one for me.";
	}
}

module.exports = Who;