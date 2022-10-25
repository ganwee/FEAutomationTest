const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const FormsPage = require('../pages/formsPage');
const { studentKelvin } = require('../constants/userFields');
const { errorIcons } = require('../constants/errorIcons');

Given('I click on Practice Form', async function () {
    await this.driver.findElement(By.xpath(FormsPage.PracticeFormXPath)).click();
});

When('I submit the form with details without last name', async function () {
    await FormsPage.fillAllDataExceptLastName(this.driver, studentKelvin);
    await FormsPage.submitData(this.driver);
});

Then('I should see the error in Last Name field', async function () {
    expectedErrorIcon = errorIcons.url
    actualErrorIcon = await this.driver.findElement(By.id(FormsPage.PracticeFormLastNameFieldId)).getCssValue("background-image")
    assert.equal(expectedErrorIcon, actualErrorIcon)
});

When('I fill up last name correctly and resubmit the form', async function () {
    await FormsPage.fillDataLastName(this.driver, studentKelvin);
    await FormsPage.submitData(this.driver);
});

Then('I should see Thanks for submitting the form page', async function () {
    const expectedHeader = "Thanks for submitting the form"
    const studentFullName = studentKelvin.firstName + " " + studentKelvin.lastName
    actualHeader = await this.driver.findElement(By.className(FormsPage.SubmittedFormHeaderClass)).getText();

    assert.equal(expectedHeader, actualHeader)
    assert.equal(studentFullName, await this.driver.findElement(By.xpath("/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]/td[2]")).getText())
    for (let i = 2; i < studentKelvin.length; i++) {
        assert.equal(studentKelvin[i], await this.driver.findElement(By.xpath("/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[" + i-1 + "]/td[2]")).getText())
    }
});

When('I click on close button', async function(){
    await FormsPage.closeSubmittedForm(this.driver);
})

Then('I should see Practice Form page', async function () {
    actualHeader = await this.driver.findElement(By.className('main-header')).getText();
    expectedHeader = "Practice Form";
    assert.equal(actualHeader, expectedHeader, "header text mismatch")
});