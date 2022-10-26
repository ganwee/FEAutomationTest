const { By } = require('selenium-webdriver');

class WebTablePage {
    get WebTableId() { return "item-3" }
    get WebTableAddBtnId() { return "addNewRecordButton" }
    get WebTableSearchBoxId() { return "searchBox" }
    get WebTableFirstNameFieldId() { return "firstName" }
    get WebTableLastNameFieldId() { return "lastName" }
    get WebTableAgeFieldId() { return "age" }
    get WebTableEmailFieldId() { return "userEmail" }
    get WebTableSalaryFieldId() { return "salary" }
    get WebTableDepartmentFieldId() { return "department" }
    get WebTableSubmitButtonId() { return "submit" }
    get SubmittedFirstNameXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[1]" }
    get SubmittedLastNameXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[2]" }
    get SubmittedAgeXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[3]" }
    get SubmittedEmailXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[4]" }
    get SubmittedSalaryXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[5]" }
    get SubmittedDepartmentXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[4]/div/div[6]" }
    get WebTableFirstEntryFirstNameXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div/div[1]" }
    get WebTableFirstEntrySalaryXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div/div[5]" }
    get WebTableCreatedEntryEditButtonId() { return "edit-record-4" }

    fillWebTableFirstName(driver, s) {
        driver.findElement(By.id(this.WebTableFirstNameFieldId)).sendKeys(s);
    }
    fillSearchBarFirstName(driver, s) {
        driver.findElement(By.id(this.WebTableSearchBoxId)).sendKeys(s);
    }
    fillWebTableLastName(driver, s) {
        driver.findElement(By.id(this.WebTableLastNameFieldId)).sendKeys(s);
    }
    fillWebTableEmail(driver, s) {
        driver.findElement(By.id(this.WebTableEmailFieldId)).sendKeys(s);
    }
    fillWebTableSalary(driver, s) {
        driver.findElement(By.id(this.WebTableSalaryFieldId)).sendKeys(s);
    }
    fillWebTableAge(driver, s) {
        driver.findElement(By.id(this.WebTableAgeFieldId)).sendKeys(s);
    }
    fillWebTableDepartment(driver, s) {
        driver.findElement(By.id(this.WebTableDepartmentFieldId)).sendKeys(s);
    }
    async fillAllData(driver, data) {
        await this.fillWebTableFirstName(driver, data['First Name'])
        await this.fillWebTableLastName(driver, data['Last Name'])
        await this.fillWebTableEmail(driver, data['Email'])
        await this.fillWebTableSalary(driver, data['Salary'])
        await this.fillWebTableAge(driver, data['Age'])
        await this.fillWebTableDepartment(driver, data['Department'])
    }
    async submitData(driver) {
        await driver.findElement(By.id(this.WebTableSubmitButtonId)).click();
    }
}

module.exports = new WebTablePage();