//var angularPage = require('../../pages/gmail-page')
var expect = require('chai').expect
const { Given, When, Then } = require('cucumber');

module.exports = function () {
    this.Given('I\'m on Gmail page', function() {
       browser.get('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'); 
    });
    
    this.When('Enter data in textbox',  function () {  
        element(by.id('identifierId')).sendKeys('torredionisio9@gmail.com');      
        element(by.id('identifierNext')).click();   
        
    });

    this.When('Enter password',  function () {   
        browser.sleep(2000);
        element(by.name('password')).sendKeys('Cortin@33');
        element(by.id('passwordNext')).click();   
    });

    this.Then('Validate data in URL', () => {  
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf($('#inbox')), 10000);              
    }); 

    this.Given('navigate to button new', () =>{
        browser.sleep(2000);
        element(by.xpath("//span[@class='bog']")).click();
        // var EC = protractor.ExpectedConditions;
        // browser.wait(10000); 
    });

    // this.Then('Validate data in URL', () => {  
    //     browser.sleep(9000);
    //     browser.getCurrentUrl.then((result) => {
    //     expect(result).to.contain('#inbox');
    //     });            
    // }); 
}