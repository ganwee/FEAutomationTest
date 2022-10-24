const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const ElementsPage = require('../pages/elementsPage');

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

    await this.driver.wait(until.elementLocated(By.id(ElementsPage.SubmittedPermanentAddress)), 10 * 1000)

    var actualData = {
        "actualFullName": await this.driver.findElement(By.id(ElementsPage.SubmittedName)).getText(),
        "actualEmail": await this.driver.findElement(By.id(ElementsPage.SubmittedEmail)).getText(),
        "actualCurrentAddress": await this.driver.findElement(By.id(ElementsPage.SubmittedCurrentAddress)).getText(),
        "actualPermanentAddress": await this.driver.findElement(By.id(ElementsPage.SubmittedPermanentAddress)).getText()
    }

    for (let i = 0; i < expectedData.length; i++) {
        assert.equal(expectedData[i], actualData[i])
    }
});