const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const RadioButtonPage = require('../pages/radioButtonPage');

Given('I click on Radio Button', async function () {
    await this.driver.findElement(By.id(RadioButtonPage.RadioButtonId)).click();
});

When('I select Radio Button option as Impressive', async function(){
    await this.driver.findElement(By.xpath(RadioButtonPage.ImpressiveRadioButtonXPath)).click();
});

Then('I should see my selection results as Impressive', async function(){
    const expectedResult = 'Impressive'
    actualResult = await this.driver.findElement(By.className(RadioButtonPage.SelectionResultClass)).getText();
    assert.equal(expectedResult, actualResult, "wrong selection")
})