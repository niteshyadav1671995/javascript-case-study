
var Who_Prototype = require('./who-prototype');

describe('Name', function () {
  var who_prototype = new Who_Prototype();

  it('gives one to you if no parameter given', function () {
    expect(who_prototype.name()).toEqual('One for you, one for me.');
  });

  it('gives one to Alice if \'Alice\' is given', function () {
    expect(who_prototype.name('Alice')).toEqual('One for Alice, one for me.');
  });
});
