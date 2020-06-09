var expect = require('chai').expect

const txtEmail = element(by.id('identifierId'));
const nextButton = element(by.id('identifierNext'));
const profileCbox = element(by.id('profileIdentifier')); 
//const todoList = element(by.xpath('//ul//li//label//span'));

exports.setTextEmail = (data) => {
    txtEmail.sendKeys(data);
}

exports.clickNextButton = () => {
    nextButton.click();
}

exports.validateData=()=>{
    profileCbox.getText().then((result) => {
        expect(result).to.equal('torredionisio9@gmail.com');
    })
}
