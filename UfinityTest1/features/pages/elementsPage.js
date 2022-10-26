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
    async fillAllData(driver, data) {
        await this.fillTextBoxFullName(driver, data['Full Name'])
        await this.fillTextBoxEmail(driver, data['Email'])
        await this.fillTextBoxCurrentAddress(driver, data['Current Address'])
        await this.fillTextBoxPermanentAddress(driver, data['Permanent Address'])
    }
    async submitData(driver) {
        await driver.findElement(By.id(this.TextBoxSubmitButtonId)).click();
    }
}

module.exports = new ElementsPage();