const { By, until, Select, Key } = require('selenium-webdriver');

class FormsPage {
    get PracticeFormXPath() { return "//span[text()='Practice Form']" }
    get PracticeFormMainHeaderClass() { return "main-header" }
    get PracticeFormFirstNameFieldId() { return "firstName" }
    get PracticeFormLastNameFieldId() { return "lastName" }
    get PracticeFormEmailFieldId() { return "userEmail" }
    get PracticeFormGenderButtonXPath() { return "//*[@id='genterWrapper']/div[2]/div[1]" }
    get PracticeFormMobileFieldId() { return "userNumber" }
    get PracticeFormDateOfBirthId() { return "dateOfBirthInput" }
    get PracticeFormDateSelectorByMonthClass() { return "react-datepicker__month-select" }
    get PracticeFormDateSelectorByYearClass() { return "react-datepicker__year-select" }
    get PracticeFormDateSelectorByDayClass() { return "react-datepicker__day react-datepicker__day--018" }
    get PracticeFormSubjectsClass() { return "subjects-auto-complete__control" }
    get PracticeFormSubjectsAutoCompleteTextboxId() { return "subjectsInput" }
    get PracticeFormSubjectsAutoCompleteMenuId() { return "react-select-2-option-0" }
    get PracticeFormHobbiesSportsCheckBoxXPath() { return "//*[@id='hobbiesWrapper']/div[2]/div[1]/label" }
    get PracticeFormHobbiesMusicCheckBoxXPath() { return "//*[@id='hobbiesWrapper']/div[2]/div[3]/label" }
    get PracticeFormUploadPictureBtnId() { return "uploadPicture" }
    get PracticeFormCurrentAddressTextAreaId() { return "currentAddress" }
    get PracticeFormStateDropDownId() { return "state" }
    get PracticeFormStateDropDownListOptionXPath() { return "//*[text()='NCR']" }
    get PracticeFormCityDropDownId() { return "city" }
    get PracticeFormCityDropDownListOptionXPath() { return "//*[text()='Noida']" }
    get PracticeFormSubmitButtonId() { return "submit" }
    get PracticeFormCloseButtonId() { return "closeLargeModal" }

    get SubmittedFormHeaderClass() { return "modal-title h4" }

    get WidgetsXPath() { return "//div[text()='Widgets']" }

    fillPracticeFormFirstName(driver, s) {
        driver.findElement(By.id(this.PracticeFormFirstNameFieldId)).sendKeys(s);
    }
    fillPracticeFormLastName(driver, s) {
        driver.findElement(By.id(this.PracticeFormLastNameFieldId)).sendKeys(s);
    }
    fillPracticeFormEmail(driver, s) {
        driver.findElement(By.id(this.PracticeFormEmailFieldId)).sendKeys(s);
    }
    fillPracticeFormGender(driver, s) {
        if (s == "Male") {
            driver.findElement(By.xpath(this.PracticeFormGenderButtonXPath)).click();
        }
    }
    fillPracticeFormMobile(driver, s) {
        driver.findElement(By.id(this.PracticeFormMobileFieldId)).sendKeys(s);
    }
    async fillPracticeFormDateOfBirth(driver, s) {
        await driver.findElement(By.id(this.PracticeFormDateOfBirthId)).click();
        await driver.wait(until.elementLocated(By.className(this.PracticeFormDateSelectorByMonthClass)), 10 * 1000)

        let monthSelector = new Select(driver.findElement(By.className(this.PracticeFormDateSelectorByMonthClass)))
        let yearSelector = new Select(driver.findElement(By.className(this.PracticeFormDateSelectorByYearClass)))

        await monthSelector.selectByVisibleText("November");
        await yearSelector.selectByVisibleText("1990");
        await driver.findElement(By.className(this.PracticeFormDateSelectorByDayClass)).click();
    }
    async fillPracticeFormSubjects(driver, s) {
        let sArray = s.split(",")

        await driver.findElement(By.className(this.PracticeFormSubjectsClass)).click();
        for (let i = 0; i < sArray.length; i++) {
            await driver.findElement(By.id(this.PracticeFormSubjectsAutoCompleteTextboxId)).sendKeys(sArray[i]);
            await driver.findElement(By.id(this.PracticeFormSubjectsAutoCompleteMenuId)).click();
            // await driver.actions().sendKeys(Key.ENTER).perform();
        }
    }
    async fillPracticeFormHobbies(driver, s) {
        let sArray = s.split(",")
        for (let i = 0; i < sArray.length; i++) {
            if (sArray[i] == "Sports") {
                driver.findElement(By.xpath(this.PracticeFormHobbiesSportsCheckBoxXPath)).click();
            }
            if (sArray[i] == "Music") {
                driver.findElement(By.xpath(this.PracticeFormHobbiesMusicCheckBoxXPath)).click();
            }
        }
    }
    fillPracticeFormUploadPicture(driver, s) {
        /*Will need help to edit file path to be dynamic*/
        driver.findElement(By.id(this.PracticeFormUploadPictureBtnId)).sendKeys(s);
    }
    fillPracticeFormCurrentAddress(driver, s) {
        driver.findElement(By.id(this.PracticeFormCurrentAddressTextAreaId)).sendKeys(s);
    }
    async fillPracticeFormStateAndCity(driver, s1, s2) {
        await driver.findElement(By.id(this.PracticeFormStateDropDownId)).click();
        await driver.wait(until.elementLocated(By.xpath(this.PracticeFormStateDropDownListOptionXPath)), 10 * 1000)
        await driver.findElement(By.xpath("//*[text()='" + s1 + "']")).click();

        await driver.findElement(By.id(this.PracticeFormCityDropDownId)).click();
        await driver.wait(until.elementLocated(By.xpath(this.PracticeFormCityDropDownListOptionXPath)), 10 * 1000)
        await driver.findElement(By.xpath("//*[text()='" + s2 + "']")).click();


    }
    async fillAllDataExceptLastNameAndCityState(driver, data) {
        await this.fillPracticeFormFirstName(driver, data['firstName']) //working
        await this.fillPracticeFormEmail(driver, data['email']) //working
        await this.fillPracticeFormGender(driver, data['gender']) //working
        await this.fillPracticeFormMobile(driver, data['mobile']) //working
        await this.fillPracticeFormDateOfBirth(driver, data['dateOfBirth']) //working
        await this.fillPracticeFormSubjects(driver, data['subjects']) //working
        await this.fillPracticeFormHobbies(driver, data['hobbies']) //working
        await this.fillPracticeFormUploadPicture(driver, data['picture']) //working on local
        await this.fillPracticeFormCurrentAddress(driver, data['address']) //working
    }
    async fillDataLastName(driver, data) {
        await this.fillPracticeFormLastName(driver, data['lastName']) //working
    }
    async fillDataStateAndCity(driver, data) {
        await this.fillPracticeFormStateAndCity(driver, data['state'], data['city']) //working
    }
    async submitData(driver) {
        await driver.findElement(By.id(this.PracticeFormSubmitButtonId)).click();
    }
    async closeSubmittedForm(driver) {
        await driver.findElement(By.id(this.PracticeFormCloseButtonId)).click();
    }
}

module.exports = new FormsPage();