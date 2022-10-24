const { By } = require('selenium-webdriver');

class FormsPage {
    get PracticeFormXPath() { return "//span[text()='Practice Form']" }
    get PracticeFormFirstNameFieldId() { return "firstName" }
    get PracticeFormLastNameFieldId() { return "lastName" }
    get PracticeFormEmailFieldId() { return "userEmail" }
    get PracticeFormGenderButtonId() { return "gender-radio-1" }
    get PracticeFormMobileFieldId() { return "userNumber" }
    get PracticeFormDateOfBirthId() { return "dateOfBirthInput" }
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
    fillPracticeFormGender(driver) {
        driver.findElement(By.id(this.PracticeFormGenderButtonId)).click();
    }
    fillPracticeFormMobile(driver, s) {
        driver.findElement(By.id(this.PracticeFormMobileFieldId)).sendKeys(s);
    }
    fillPracticeFormDateOfBirth(driver, s) {
        driver.findElement(By.id(this.PracticeFormDateOfBirthId)).sendKeys(s);
    }
    fillPracticeFormSubjects(driver, s) {
        driver.findElement(By.id(this.PracticeFormSubjectsId)).sendKeys(s);
    }
    fillPracticeFormHobbies(driver, s) {
        if (s == "Sports"){
            driver.findElement(By.id(this.PracticeFormHobbiesSportsCheckBoxId)).click();
        }
        if (s == "Music"){
            driver.findElement(By.id(this.PracticeFormHobbiesMusicCheckBoxId)).click();
        }
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
        this.fillPracticeFormFirstName(driver, data['firstName'])
        this.fillPracticeFormLastName(driver, data['lastName'])
        this.fillPracticeFormEmail(driver, data['email'])
        this.fillPracticeFormGender(driver, data['gender'])
        this.fillPracticeFormMobile(driver, data['mobile'])
        this.fillPracticeFormSubjects(driver, data['subjects'])
        for (i = 0; i < data['hobbies'].length; i++){
            this.fillPracticeFormMobile(driver, data['hobbies'][i])
        }
        this.fillPracticeFormMobile(driver, data['mobile'])

        this.fillPracticeFormUploadPicture(driver, data['picture'])
        this.fillPracticeFormCurrentAddress(driver, data['address'])
        // this.fillPracticeFormState(driver, data['state'])
        // this.fillPracticeFormCity(driver, data['city'])
    }
    submitData(driver) {
        driver.findElement(By.id(this.PracticeFormSubmitButtonId)).click();
    }
}

module.exports = new FormsPage();