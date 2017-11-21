//Multiform spec.js
describe('Protractor Demo Registration', function() {
	
  it('Profile page', function() {
	browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
	browser.sleep(5000)
	element(by.model('formData.name')).sendKeys("Avinash Dingari");
    element(by.name('email')).sendKeys("avinash.dingari@gmail.com");
	browser.sleep(5000)
	expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
  });
   
  it('Interests Page', function() {
	element(by.className('btn btn-block btn-info')).click();
	browser.sleep(2000)
	element(by.name('009')).click();
	browser.sleep(1000)
	expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests');
  });
  
  it('Payment Page', function() {
	element(by.className('btn btn-block btn-info')).click();
	browser.sleep(2000)
	expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment');
  }); 
  
});

