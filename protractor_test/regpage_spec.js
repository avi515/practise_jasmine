//Registration spec.js
describe('Protractor Demo Registration', function() {
 
  it('should login', function() {
	browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
	browser.sleep(5000)
	element(by.name('username')).sendKeys("angular");
    element(by.name('password')).sendKeys("password");
	element(by.model('model[options.key]')).sendKeys("avi515");
    element(by.className('btn btn-danger')).click();
	browser.sleep(5000)
	expect(browser.getTitle()).toEqual('Protractor practice website - Registration');
  });
 
});
