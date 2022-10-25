const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Browser } = require('selenium-webdriver');
const FormsPage = require('../pages/formsPage');
const { studentKelvin } = require('../constants/userFields');

Given('I click on Practice Form', async function () {
    await this.driver.findElement(By.xpath(FormsPage.PracticeFormXPath)).click();
});

When('I submit the form with details without last name', async function () {
    await FormsPage.fillAllDataExceptLastName(this.driver, studentKelvin);
    // await FormsPage.submitData(this.driver);
});

// Then('I should see the error in Last Name field', async function (table) {
    /*Not sure how to automate this as there's no indicator when error display is changed*/
    // const expectedError = table.rowHash();
    // actualError =
    //     assert.equal(expectedError['error'], actualError)
// });

// When('I submit the form with all details correctly', async function () {
//     await FormsPage.fillDataLastName(this.driver, studentKelvin);
//     await FormsPage.submitData(this.driver);
// });

// Then('I should see Thanks for submitting the form page', async function () {
//     const expectedHeader = "Thanks for submitting the form"
//     actualHeader = await this.driver.findElement(By.className(FormsPage.SubmittedFormHeaderClass)).getText();
//     actualData = {}
//     for (let i = 1; i < studentKelvin.length; i++) {
//         actualData.push(await this.driver.findElement(By.xpath("/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[" + i + "]/td[2]")).getText())
//     }
//     assert.equal(expectedHeader, actualHeader)
//     for (let i = 1; i < studentKelvin.length; i++) {
//         assert.equal(studentKelvin[i - 1] + " " + studentKelvin[i], actualData[i])
//     }
// });