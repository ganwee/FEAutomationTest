const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const WebTablePage = require('../pages/webTablePage');

Given('I click on Web Tables', async function () {
    await this.driver.findElement(By.id(WebTablePage.WebTableId)).click();
});

When('I click on Add button', async function () {
    await this.driver.findElement(By.id(WebTablePage.WebTableAddBtnId)).click();
});

When('I submit form with details', async function (table) {
    const data = table.rowsHash();
    await WebTablePage.fillAllData(this.driver, data);
    await WebTablePage.submitData(this.driver);
});


Then('I should see form submission added to the table', async function (table) {
    const expectedData = table.rowsHash();

    await this.driver.wait(until.elementLocated(By.xpath(WebTablePage.SubmittedDepartmentXPath)), 10 * 1000)

    var actualData = {
        "First Name": await this.driver.findElement(By.xpath(WebTablePage.SubmittedFirstNameXPath)).getText(),
        "Last Name": await this.driver.findElement(By.xpath(WebTablePage.SubmittedLastNameXPath)).getText(),
        "Email": await this.driver.findElement(By.xpath(WebTablePage.SubmittedEmailXPath)).getText(),
        "Age": await this.driver.findElement(By.xpath(WebTablePage.SubmittedAgeXPath)).getText(),
        "Salary": await this.driver.findElement(By.xpath(WebTablePage.SubmittedSalaryXPath)).getText(),
        "Department": await this.driver.findElement(By.xpath(WebTablePage.SubmittedDepartmentXPath)).getText()
    }

    for (const property in expectedData) {
        await assert.equal(expectedData[property], actualData[property])
    }
});

Given('I search for first name of created entry', async function () {
    const expectedSearchResults = await this.driver.findElement(By.xpath(WebTablePage.SubmittedFirstNameXPath)).getText()
    await this.driver.findElement(By.id(WebTablePage.WebTableSearchBoxId)).click();
    WebTablePage.fillSearchBarFirstName(this.driver, await this.driver.findElement(By.xpath(WebTablePage.SubmittedFirstNameXPath)).getText())

    this.driver.wait(until.elementLocated(By.xpath(WebTablePage.WebTableFirstEntryFirstNameXPath)), 10 * 1000)
    actualSearchedFirstName = await this.driver.findElement(By.xpath(WebTablePage.WebTableFirstEntryFirstNameXPath)).getText()

    assert.equal(expectedSearchResults, actualSearchedFirstName)
});

Given('I click on edit button', async function () {
    await this.driver.findElement(By.id(WebTablePage.WebTableCreatedEntryEditButtonId)).click()
});

When('I update salary', async function (table) {
    const expectedSalary = table.rowsHash()
    await this.driver.findElement(By.id(WebTablePage.WebTableSalaryFieldId)).click()
    await this.driver.findElement(By.id(WebTablePage.WebTableSalaryFieldId)).clear()
    await WebTablePage.fillWebTableSalary(this.driver, expectedSalary['Salary'])
    await WebTablePage.submitData(this.driver);
});

Then('I should see updated salary in Web Tables', async function (table) {
    const expectedSalary = table.rowsHash()

    await this.driver.wait(until.elementLocated(By.xpath(WebTablePage.WebTableFirstEntrySalaryXPath)), 10 * 1000)
    actualUpdatedSalary = await this.driver.findElement(By.xpath(WebTablePage.WebTableFirstEntrySalaryXPath)).getText()
    assert.equal(expectedSalary['Salary'], actualUpdatedSalary)
});