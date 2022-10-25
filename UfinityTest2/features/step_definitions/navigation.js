const assert = require('assert');
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const HomePage = require('../pages/homePage');
const { Actions } = require('selenium-webdriver/lib/input');

Given('I have visited the QA Tools demo homepage on Chrome', { timeout: 50 * 1000 }, async function () {
    this.driver = new Builder().forBrowser('chrome').build();
    this.driver.manage().window().maximize();
    await this.driver.get('https://demoqa.com');
    // await this.driver.wait(until.elementLocated(By.css("html")), 5 * 1000)
    // for (let i = 0; i < 5; i++){
    //     await this.driver.actions().keyDown(Key.CONTROL).sendKeys(Key.SUBTRACT).keyUp(Key.CONTROL)
    //     await this.driver.findElement(By.css("html")).sendKeys(Key.chord(Key.CONTROL, Key.SUBTRACT))
    //     this.driver.actions().sendKeys(Key.chord(Key.CONTROL, Key.SUBTRACT)).perform()
    // }
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