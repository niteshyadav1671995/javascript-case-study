function lazyGuy() {
    this.hey = function(message){
      var reply="";
      console.log(message);
      var exclamation = message.match(/!/g);
      var uppercase = message.match(/[A-Z]/g);
      console.log(exclamation);
      console.log(uppercase);
      if(message.endsWith("?")){
        reply="Sure.";
        return reply;
      }
      if(exclamation!=null){
        reply="Whoa, chill out!";
        return reply;
      }
      if(uppercase !=null){
        reply="Whoa, chill out!";
        return reply;
      }
      reply="Whatever.";
      
    }
}

module.exports = lazyGuy;