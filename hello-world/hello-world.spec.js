var HelloWorld = require('./hello-world');

describe('Hello World', function () {
  var helloWorld = new HelloWorld();

  it('says hello world', function () {
  	const expected = 'Hello, World!';
    expect(helloWorld.hello()).toEqual(expected);
  });
  
  it('says length of String ', function() {
	 const expected = 5;
	 expect(helloWorld.lengthOfString('Hello')).toEqual(expected);
  });
});
