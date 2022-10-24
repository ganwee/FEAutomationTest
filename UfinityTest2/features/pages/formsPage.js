const { By, until } = require('selenium-webdriver');

class FormsPage {
    get PracticeFormXPath() { return "//span[text()='Practice Form']" }
    get PracticeFormFirstNameFieldId() { return "firstName" }
    get PracticeFormLastNameFieldId() { return "lastName" }
    get PracticeFormEmailFieldId() { return "userEmail" }
    get PracticeFormGenderButtonXPath() { return "//*[@id='genterWrapper']/div[2]/div[1]" }
    get PracticeFormMobileFieldId() { return "userNumber" }
    get PracticeFormDateOfBirthId() { return "dateOfBirthInput" }
    get PracticeFormDatePickerByMonthClass() { return "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--select" }
    get PracticeFormSubjectsId() { return "subjectsContainer" }
    get PracticeFormHobbiesSportsCheckBoxId() { return "hobbies-checkbox-1" }
    get PracticeFormHobbiesMusicCheckBoxId() { return "hobbies-checkbox-3" }
    get PracticeFormUploadPictureBtnId() { return "uploadPicture" }
    get PracticeFormCurrentAddressTextAreaId() { return "currentAddress" }
    get PracticeFormStateDropDownId() { return "state" }
    get PracticeFormCityDropDownId() { return "city" }
    get SubmittedName() { return "name" }
    get SubmittedEmail() { return "email" }
    get SubmittedCurrentAddress() { return "currentAddress" }
    get SubmittedPermanentAddress() { return "permanentAddress" }

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
        driver.findElement(By.id(this.PracticeFormDateOfBirthId)).click();
        let sArray = s.split(" ");

        await driver.wait(until.elementLocated(By.className(this.PracticeFormDatePickerByMonthClass)), 50 * 1000)
        await driver.findElement(By.className(this.PracticeFormDatePickerByMonthClass)).click();
        await driver.findElement(By.className(this.PracticeFormDatePickerByMonthClass)).selectByVisibleText("November");
    }
    fillPracticeFormSubjects(driver, s) {
        driver.findElement(By.id(this.PracticeFormSubjectsId)).sendKeys(s);
    }
    fillPracticeFormHobbies(driver) {
        driver.findElement(By.id(this.PracticeFormHobbiesSportsCheckBoxId)).click();
        driver.findElement(By.id(this.PracticeFormHobbiesMusicCheckBoxId)).click();
    }
    fillPracticeFormUploadPicture(driver, s) {
        driver.findElement(By.id(this.PracticeFormUploadPictureBtnId)).sendKeys(s);
    }
    fillPracticeFormCurrentAddress(driver, s) {
        driver.findElement(By.id(this.PracticeFormCurrentAddressTextAreaId)).sendKeys(s);
    }
    fillPracticeFormState(driver, s) {
        driver.findElement(By.id(this.PracticeFormStateDropDownId)).sendKeys(s);
    }
    fillPracticeFormCity(driver, s) {
        driver.findElement(By.id(this.PracticeFormCityDropDownId)).sendKeys(s);
    }
    fillAllData(driver, data) {
        // this.fillPracticeFormFirstName(driver, data['firstName'])
        // this.fillPracticeFormLastName(driver, data['lastName'])
        // this.fillPracticeFormEmail(driver, data['email'])
        // this.fillPracticeFormGender(driver, data['gender'])
        // this.fillPracticeFormMobile(driver, data['mobile'])
        this.fillPracticeFormDateOfBirth(driver, data['dateOfBirth'])
        // this.fillPracticeFormSubjects(driver, data['subjects'])
        // this.fillPracticeFormHobbies(driver)
        // this.fillPracticeFormUploadPicture(driver, data['picture'])
        // this.fillPracticeFormCurrentAddress(driver, data['address'])
        // this.fillPracticeFormState(driver, data['state'])
        // this.fillPracticeFormCity(driver, data['city'])
    }
    submitData(driver) {
        driver.findElement(By.id(this.PracticeFormSubmitButtonId)).click();
    }
}

module.exports = new FormsPage();