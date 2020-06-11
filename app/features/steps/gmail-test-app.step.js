var gmailPage = require('../../pages/gmail-page')
var expect = require('chai').expect;
const assert = require('chai').assert;
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
         var button = element(by.css("div[gh='cm']"));
         var isPresent = EC.presenceOf(button); 
        // var isVisibility= EC.visibilityOf($('#inbox')); 
         browser.wait(isPresent, 10000);   
         assert.isTrue(Boolean(isPresent));          

    }); 

    this.Given('navigate to button new', () =>{
         
         gmailPage.clickButton(element(by.css("div[gh='cm']"))); 
         let EC2 = protractor.ExpectedConditions;
         let winToEmail= element(by.css("div[class='nH Hd']")); 
         browser.wait(EC2.visibilityOf(winToEmail), 5000);
        //  let isdis= expect(winToEmail.isDisplayed()).toBe(true);
        //  assert.isTrue(Boolean(isdis));          
    });

    this.When('Enter the destinatary email the subject and message', ()=>{
        gmailPage.writeEmail('torredionisio9@gmail.com', 'My First Test', 'Hello world!!');  

    }); 

    this.When('I click the button Send', ()=>{
        
        gmailPage.clickButton(element(by.css('div.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3'))); 
       
    }); 

     this.Then('I Validate that I send the email', () => {  
        const messageBox = element(by.css('div.vh span.bAq')); 
        let EC3 = protractor.ExpectedConditions;
        browser.wait(EC3.visibilityOf(messageBox), 5000); 
        messageBox.getText().then((result) => {
            expect(result).to.equal('Mensaje enviado.');
        })
    }); 

    this.Given('navigate to button new again', ()=>{
        gmailPage.clickButton(element(by.css("div[gh='cm']")));
    }); 

    this.When('Enter my data email and subject again', ()=>{
        gmailPage.writeEmail('torredionisio9@gmail.com', 'My First Test', 'Hello world 2!!');  
    }); 

    this.When('I erase the draft', ()=>{
        gmailPage.clickButton(element(by.css("div[class='og T-I-J3']"))); 
    });

    this.Then('I hope the message', () => {  
        let messageDraft = element(by.css('div.vh span.bAq')); 
        let EC3 = protractor.ExpectedConditions;
        browser.wait(EC3.visibilityOf(messageDraft), 5000);
        messageDraft.getText().then((result) => {
            expect(result).to.equal('Fake message');
        }) 
    }); 
}