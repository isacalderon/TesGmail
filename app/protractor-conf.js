exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs : ['features/*.feature'],

    capabilities : {
        browserName : 'chrome'
    },
    framework : 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onPrepare: function(){
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.driver.wait(function() {
            return browser.driver.getCurrentUrl();
          });
     } ,

    directConnection : true,

    cucumberOpts: {
        require: '**/**.js'
    }, 

    baseUrl: 'https://accounts.google.com/',

}