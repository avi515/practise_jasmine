// checkbox Spec
describe('Check box practice', function()  {
	
	it('Launch Checkbox Page' , function() {
		//Launch the Checkbox Practice page
		browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');	
		browser.sleep(2000)
		console.log('Page opened')
		expect(browser.getTitle()).toEqual('Protractor practice website - Checkboxes');
	});
	
	it('Checkbox -  Store' , function() {
		//Check the first Checkbox "Store"
		element(by.model('data.root')).click();
		browser.sleep(3000)
		//Uncheck the first Checkbox "Store"
		element(by.model('data.root')).click();
		browser.sleep(2000)
		console.log('Step 1 Passed')
		//Validate the action by comparing the check value to be False
		expect(element(by.model('data.root')).isSelected()).toBe(false);
	});
	
	it('Checkbox - Inside' , function()  {
		//Check the second Checkbox "Inside"
		element(by.model('division.included')).click();
		browser.sleep(2000)
		//Check the Third box
		element(by.className('ng-pristine ng-untouched ng-valid')).click();
		browser.sleep(3000)
		console.log('Step 2 Passed')
		//Validate the action by comparing the check value to be True
		expect(element(by.className('ng-pristine ng-untouched ng-valid')).isSelected()).toBe(false);
	});
	
	it('First Aid select', function()   {
		//Check the First Aid checkbox
		element(by.model('prod.included')).click();
		browser.sleep(6000)
		console.log('Step 3 Passed')
		//Validate if First Aid checkbox is unchecked
		expect(element(by.model('prod.included')).isSelected()).toBe(true);
	
	});
	
	it(' to use for and if loops', function()   {
		//To use loops
			element(by.model('data.root')).click();
			browser.sleep(2000)
			if(expect(element(by.model('data.root')).isSelected()).toBe(true)) {
            element(by.model('data.root')).click();
			browser.sleep(3000)
            console.log('in the if')
       }
       else{
           element(by.model('division.included')).click();;
           browser.sleep(3000);
           element(by.model('data.root')).click();
		   browser.sleep(2000)
           console.log('in the else')
       }		
	});

    it('Implement While loop', function()	{
		//To use While loop
		while(expect(element(by.model('data.root')).isSelected()).toBe(false))	{
			element(by.model('division.included')).click();
			browser.sleep(2000)
			console.log('in the While loop')
			break;
		}	
	});	
	
	
});
