const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser, Key } = require('selenium-webdriver');
const FormsPage = require('../pages/formsPage');
const { studentKelvin } = require('../constants/userFields');
const { ValidationConstants } = require('../constants/errorIcons');
const delay = require('delay');

Given('I click on Practice Form', async function () {
    await this.driver.findElement(By.xpath(FormsPage.PracticeFormXPath)).click();
});

When('I fill the form with details without last name and city state', { setTimeout: 10 * 1000 }, async function () {
    await FormsPage.fillAllDataExceptLastNameAndCityState(this.driver, studentKelvin);
});

When('I submit the form after clicking widgets and filling in the remaining details', async function () {
    await this.driver.findElement(By.xpath(FormsPage.WidgetsXPath)).click();
    await delay(0.5 * 1000)
    await this.driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.END);
    await delay(0.5 * 1000)
    await FormsPage.fillDataStateAndCity(this.driver, studentKelvin);
    await FormsPage.submitData(this.driver);
});

Then('I should see the error in Last Name field', async function () {
    expectedErrorIcon = ValidationConstants.lastNameErrorIconUrl
    actualErrorIcon = await this.driver.findElement(By.id(FormsPage.PracticeFormLastNameFieldId)).getCssValue("background-image")
    assert.equal(expectedErrorIcon, actualErrorIcon)
});

When('I fill up last name correctly and resubmit the form', async function () {
    await FormsPage.fillDataLastName(this.driver, studentKelvin);
    await delay(0.5 * 1000)
    await this.driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.END);
    await delay(0.5 * 1000)
    await FormsPage.submitData(this.driver);
});

Then('I should see Thanks for submitting the form page', async function () {
    const expectedHeader = "Thanks for submitting the form"
    const studentFullName = studentKelvin.firstName + " " + studentKelvin.lastName

    await this.driver.wait(until.elementLocated(By.className(FormsPage.SubmittedFormHeaderClass)), 10 * 1000)
    actualHeader = await this.driver.findElement(By.className(FormsPage.SubmittedFormHeaderClass)).getText();

    assert.equal(expectedHeader, actualHeader)

    let i = 1
    let actualData = {}
    for (const property in studentKelvin) {
        actualData[property] = await this.driver.findElement(By.xpath("/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[" + i + "]/td[2]")).getText()
        if (property == "picture") {
            tempArray = studentKelvin[property].split("\\")
            studentKelvin[property] = tempArray[tempArray.length - 1]
        }
        assert.equal(studentKelvin[property], actualData[property])
        i++
    }
});

When('I click on close button', async function () {
    await delay(0.5 * 1000)
    await FormsPage.closeSubmittedForm(this.driver);
})

Then('I should see Practice Form page', async function () {
    const expectedHeader = "Practice Form";
    await delay(0.5 * 1000)
    await this.driver.findElement(By.css("body")).sendKeys(Key.CONTROL, Key.HOME);
    actualHeader = await this.driver.findElement(By.className(FormsPage.PracticeFormMainHeaderClass)).getText();
    assert.equal(actualHeader, expectedHeader, "header text mismatch")
});