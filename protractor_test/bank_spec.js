// Bank Manager Spec
describe('Bank Manager Operations', function()			{
	it('Bank Manager View', function()		{
		// Open Browser window
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		browser.driver.manage().window().maximize();
		console.log('Webpage opened')
		expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');		
	});
	
	it('Open Bank Manager View', function()		{
		// Click on Bank Manager button
		element(by.buttonText('Bank Manager Login')).click();
		browser.sleep(2000)
		//Opens Bank Manager view
		console.log('Opened Bank Manager Page')
		expect(browser.getCurrentUrl()).toEqual("http://www.way2automation.com/angularjs-protractor/banking/#/manager");
		
	});
	
	it('Add a new Customer', function()		{
		//Click on Add Customer button
		element(by.buttonText("Add Customer")).click();
		browser.sleep(2000)
		// Enter Firstname
		element(by.model('fName')).sendKeys("Avinash");
		browser.sleep(1000)
		// Enter Lastname
		element(by.model('lName')).sendKeys("Dingari");
		browser.sleep(1000)
		// Enter Postcode
		element(by.model('postCd')).sendKeys("500019");
		browser.sleep(1000)
		// click button and Add Customer
		element(by.className('btn btn-default')).submit();
		browser.sleep(2000)
		// Click Ok on Alert
		browser.switchTo().alert().accept();
		
	});
	
	it('Customer List', function()		{
		//Check the Customer newly added
		element(by.buttonText("Customers")).click();
		browser.sleep(5000)
		//	
	});
	

});