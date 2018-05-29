'use strict';
function lazyGuy() {
    this.hey = function(message) {
      var reply="";
      var exclamation = message.match(/!/g);
      var uppercase = message.match(/[A-Z]/g);
      if(message.trim()==""){
        return "Fine. Be that way!";
      }
     if(message.endsWith("?")){
        reply="Sure.";
        return reply;
      }
      if(/!/.test(message)){
        console.log(message);
        reply="Whoa, chill out!";
        return reply;
      }


      reply="Whatever.";
      
    }
}

module.exports = lazyGuy;