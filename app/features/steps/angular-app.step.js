var gmailPage = require('../../pages/gmail-page')
var expect = require('chai').expect;
const assert = require('chai').assert;
const { Given, When, Then } = require('cucumber');
//const timeout = shared.constants.timeout;

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
         var button = element(by.css("div[gh='cm']"));
         var isPresent = EC.presenceOf(button); 
        // var isVisibility= EC.visibilityOf($('#inbox')); 
         browser.wait(isPresent, 10000);   
         assert.isTrue(Boolean(isPresent));          

    }); 

    this.Given('navigate to button new', () =>{
        let EC = protractor.ExpectedConditions;
        var button = element(by.css("div[gh='cm']"));
        var isClickable = EC.elementToBeClickable(button);              
        browser.wait(isClickable, 20000); //wait for an element to become clickable
        button.click();  
        browser.sleep(5000);
         let winToEmail= element(by.css("div[class='nH Hd']")); 
         browser.wait(EC.visibilityOf(winToEmail), 5000);
        //  let isdis= expect(winToEmail.isDisplayed()).toBe(true);
        //  assert.isTrue(Boolean(isdis));          
    });

    this.When('Enter the destinatary email the subject and message', ()=>{
        gmailPage.writeEmail('torredionisio9@gmail.com', 'My First Test', 'Hello world!!');  

    }); 

    this.When('I click the button Send', ()=>{
        //let bSend= element( by.cssContainingText('T-I J-J5-Ji aoO v7 T-I-atl L3', 'Enviar ‪(Ctrl-Enter)‬')); 
        //let bSend= element(by.xpath("//*contains(@data-tooltip,'Enviar ‪(Ctrl-Enter)‬')")); 
        //let bSend= element(by.css("div[class='og T-I-J3']")); 
        // draft div.J-J5-Ji.J-Z-I-Kv-H
         
        // browser.wait(element(by.css('div.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3')), 5000).Then(() => {
        //     return browser.findElement();
        // })
        // .then((el) => {
        //     return el.click();
        // })
        // .then(() => {
        //     return browser.sleep(5000);
        // });
        let EC2 = protractor.ExpectedConditions;
        var bSend = element(by.css('div.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3'));
        var isClickable = EC2.elementToBeClickable(bSend);              
        browser.wait(isClickable, 20000); //wait for an element to become clickable
        bSend.click();  
        browser.sleep(5000);
    
    }); 

    // this.Then('Validate data in URL', () => {  
    //     browser.sleep(9000);
    //     browser.getCurrentUrl.then((result) => {
    //     expect(result).to.contain('#inbox');
    //     });            
    // }); 
}