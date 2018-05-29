function ETL(){}
ETL.prototype.transform = function(input){
    var output = {};
    Object.keys(input).forEach(function(key) {
        input[key].forEach(function(value){
           output[value.toLowerCase()]= parseInt(key);
       })
    });
    return output;
}
module.exports = ETL;