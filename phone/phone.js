function PhoneNumber(input){
	this.number = function(){
		input=input.replace(/[^0-9]/g, '');
		if(input.length==11){
			if(input.charAt(0)=='1'){
				return input.slice(1);
			}
		}
		if(input.length!=10)
		{	
			return null;
		}

		return input;
	} 
}
module.exports = PhoneNumber ;