//function Who(){
//	this.name = function(input){
//		if(input==undefined){
//			return "One for you, one for me."
//		}
//		return "One for "+input+", one for me.";
//	}
//}

function Who(){}
Who.prototype.name = function(name) {
	if(name == undefined)
		return "One for you, one for me.";
	else 
		return "One for "+name+", one for me.";
} 

module.exports = Who;