// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
	browser.sleep(2000)
	browser.refresh();
	browser.sleep(2000)
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('Enter First attribute', function() {
	  var fir = element(by.model("first"));
	  fir.sendKeys("6");
	  browser.sleep(2000)
	  //Clear value 6 to 8 here
	  fir.clear();
	  browser.sleep(2000);
	  fir.sendKeys("8");
	  browser.sleep(2000);
	//expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('Enter Second attribute', function() {
    element(by.model("second")).sendKeys("2");
	browser.sleep(2000)
	//expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('Select Operator', function() {
    //var select = element(by.model("operator"));
	//select.$('[value="MULTIPLICATION"]').click();
	element(by.model("operator")).$('[value="MULTIPLICATION"]').click();
	browser.sleep(2000)
	//expect(browser.getTitle()).toEqual('Super Calculator');
  });  
  it('Calculate value', function() {
    element(by.id("gobutton")).click();
	browser.sleep(2000)
	element(by.css('.ng-binding')).getText().then(function(assert1){
		console.log(assert1)
		expect(assert1).toContain(16);
	});
  }); 
});