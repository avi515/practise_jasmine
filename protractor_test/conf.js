// An example configuration file.
exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
/*
chromeOptions: {
     args: [ "--no-sandbox", "--headless", "--disable-gpu", "--disable-extensions", "--disable-web-security", "--disable-plugins","disable-infobars=true","start-maximized" ]
   }*/
  },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['trial_spec.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
 // rootElement: '[ng-app]'
}