const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const CheckBoxPage = require('../pages/checkboxPage');
const { homeToDesktopPath } = require('../pages/checkboxPage');

Given('I click on Check Box', async function () {
    await this.driver.findElement(By.id(CheckBoxPage.CheckBoxId)).click();
});

Given('I click on Arrow beside Home folder', async function(){
    await this.driver.findElement(By.className(CheckBoxPage.HomeCollapsedArrowBtnClass)).click();
});

Given('I extract Home to Desktop path', async function(){
    await this.driver.findElement(By.xpath(CheckBoxPage.DesktopCollapsedArrowBtnXPath)).click();
    //Not v sure how to extract path from web element using JS
    
    // const expectedDesktopXPath = 'Desktop';
    // actualDesktopXPath = await this.driver.findElement(By.xpath(CheckBoxPage.DesktopXPath)).getText();
    // assert.equal(expectedDesktopXPath, actualDesktopXPath)
});

When('I click Check Box of Commands', async function(){
    await this.driver.findElement(By.xpath(CheckBoxPage.CommandsCheckBoxXPath)).click();
});

Then('I should see my selection results as commands', async function(){
    const expectedResult = 'commands'
    actualResult = await this.driver.findElement(By.className(CheckBoxPage.SelectionResultClass)).getText();
    assert.equal(expectedResult, actualResult, "wrong selection")
})