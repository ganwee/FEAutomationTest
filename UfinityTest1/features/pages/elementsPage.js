const { By } = require('selenium-webdriver');

class ElementsPage {
    get TextBoxId() { return "item-0" }
    get TextBoxMainHeaderClass() { return "main-header" }
    get TextBoxFullNameFieldId() { return "userName" }
    get TextBoxEmailFieldId() { return "userEmail" }
    get TextBoxCurrentAddressFieldId() { return "currentAddress" }
    get TextBoxPermanentAddressFieldId() { return "permanentAddress" }
    get TextBoxSubmitButtonId() { return "submit" }
    get SubmittedNameId() { return "name" }
    get SubmittedEmailId() { return "email" }
    get SubmittedCurrentAddressXPath() { return "//p[@id='currentAddress']" }
    get SubmittedPermanentAddressXPath() { return "//p[@id='permanentAddress']" }

    fillTextBoxFullName(driver, s) {
        driver.findElement(By.id(this.TextBoxFullNameFieldId)).sendKeys(s);
    }
    fillTextBoxEmail(driver, s) {
        driver.findElement(By.id(this.TextBoxEmailFieldId)).sendKeys(s);
    }
    fillTextBoxCurrentAddress(driver, s) {
        driver.findElement(By.id(this.TextBoxCurrentAddressFieldId)).sendKeys(s);
    }
    fillTextBoxPermanentAddress(driver, s) {
        driver.findElement(By.id(this.TextBoxPermanentAddressFieldId)).sendKeys(s);
    }
    fillAllData(driver, data) {
        this.fillTextBoxFullName(driver, data['Full Name'])
        this.fillTextBoxEmail(driver, data['Email'])
        this.fillTextBoxCurrentAddress(driver, data['Current Address'])
        this.fillTextBoxPermanentAddress(driver, data['Permanent Address'])
    }
    submitData(driver) {
        driver.findElement(By.id(this.TextBoxSubmitButtonId)).click();
    }
}

module.exports = new ElementsPage();