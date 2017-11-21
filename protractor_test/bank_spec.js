// Bank validation Spec
describe('Bank operation check', function()	{
	it('Open bank Homepage', function()	{
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.sleep(1000)
		console.log('Page opened')
		expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');	
	});
	
	it('Click on Customer Login', function()	{
		element(by.buttonText('Customer Login')).click();
		console.log('Customer login')
		expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');	
	});
	
	it('Select Customer', function()	{	
		
		element(by.model("custId")).$('[value="2"]').click();
		browser.sleep(2000)
		console.log('select Harry Potter')
		element(by.buttonText('Login')).click();
		browser.sleep(2000)
		//expect(element(by.className('fontBig ng-binding'))).toEqual('Harry Potter');
	});
		
	it('Check Transactions', function()		{
		console.log('deposit amount')
		element(by.buttonText("Deposit")).click();
		browser.sleep(1000)
		console.log('enter 150 as deposit')
		element(by.model('amount')).sendKeys("150");
		browser.sleep(2000)
		element(by.className("btn btn-default")).click();
		
	});	

});

