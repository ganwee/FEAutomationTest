const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const ElementsPage = require('../pages/elementsPage');
const { studentKelvin } = require('../../../UfinityTest2/features/constants/userFields');

Given('I click on Text Box', async function () {
    await this.driver.findElement(By.id(ElementsPage.TextBoxId)).click();
});

When('I submit the form with details', async function (table) {
    const data = table.rowsHash();
    await ElementsPage.fillAllData(this.driver, data);
    await ElementsPage.submitData(this.driver);
});


Then('I should see the entered details inside a text box under the form', async function (table) {
    const expectedData = table.rowsHash();

    await this.driver.wait(until.elementLocated(By.xpath(ElementsPage.SubmittedPermanentAddressXPath)), 10 * 1000)

    let tempData = {
        "Full Name": await this.driver.findElement(By.id(ElementsPage.SubmittedNameId)).getText(),
        "Email": await this.driver.findElement(By.id(ElementsPage.SubmittedEmailId)).getText(),
        "Current Address": await this.driver.findElement(By.xpath(ElementsPage.SubmittedCurrentAddressXPath)).getText(),
        "Permanent Address": await this.driver.findElement(By.xpath(ElementsPage.SubmittedPermanentAddressXPath)).getText()
    }
    var actualData = {
        "Full Name": await tempData['Full Name'].split(":")[1],
        "Email": await tempData['Email'].split(":")[1],
        "Current Address": await tempData['Current Address'].split(":")[1],
        "Permanent Address": await tempData['Permanent Address'].split(":")[1]
    }
    for (const property in expectedData) {
        await assert.equal(expectedData[property], actualData[property])
    }
});