const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const HomePage = require('../pages/homePage');
const { Actions } = require('selenium-webdriver/lib/input');

Given('I have visited the QA Tools demo homepage on Chrome', { timeout: 50 * 1000 }, async function () {
    this.driver = new Builder().forBrowser('chrome').build();
    this.driver.manage().window().maximize();
    await this.driver.get('https://demoqa.com');
});

Given('I click on Forms Box', async function () {
    await this.driver.findElement(By.xpath(HomePage.formsBoxXPath)).click();
    actualHeader = await this.driver.findElement(By.className('main-header')).getText();
    expectedHeader = "Forms";
    assert.equal(actualHeader, expectedHeader, "header text mismatch")
});

// After(function () {
//     return this.driver.quit();
// })