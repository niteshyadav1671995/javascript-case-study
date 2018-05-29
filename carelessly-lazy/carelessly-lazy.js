function lazyGuy() {
    this.hey = function(message){
      var reply="";
      var exclamation = message.match(/!/g);
      var uppercase = message.match(/[A-Z]/g);
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