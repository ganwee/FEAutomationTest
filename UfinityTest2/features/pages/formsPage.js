const { By, until, Select } = require('selenium-webdriver');

class FormsPage {
    get PracticeFormXPath() { return "//span[text()='Practice Form']" }
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
    get PracticeFormSubjectsAutoCompleteMenuClass() { return "subjects-auto-complete__value" }
    get PracticeFormHobbiesSportsCheckBoxXPath() { return "//*[@id='hobbiesWrapper']/div[2]/div[1]/label" }
    get PracticeFormHobbiesMusicCheckBoxXPath() { return "//*[@id='hobbiesWrapper']/div[2]/div[3]/label" }
    get PracticeFormUploadPictureBtnId() { return "uploadPicture" }
    get PracticeFormCurrentAddressTextAreaId() { return "currentAddress" }
    get PracticeFormStateDropDownId() { return "state" }
    get PracticeFormStateDropDownListClass() { return "css-2613qy-menu" }
    get PracticeFormCityDropDownId() { return "city" }

    get SubmittedFormHeaderClass() { return "modal-title h4" }
    get SubmittedStudentNameXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[1]/td[2]" }
    get SubmittedStudentEmailXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[2]/td[2]" }
    get SubmittedStudentGenderXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[3]/td[2]" }
    get SubmittedStudentMobileXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[4]/td[2]" }
    get SubmittedStudentDateOfBirthXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[5]/td[2]" }
    get SubmittedStudentSubjectsXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[6]/td[2]" }
    get SubmittedStudentHobbiesXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[7]/td[2]" }
    get SubmittedStudentPictureXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[8]/td[2]" }
    get SubmittedStudentAddressXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[9]/td[2]" }
    get SubmittedStudentStateAndCityXPath() { return "/html/body/div[4]/div/div/div[2]/div/table/tbody/tr[10]/td[2]" }

    get SubmittedFormError(){return }

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
        await driver.wait(until.elementLocated(By.className(this.PracticeFormDateSelectorByMonthClass)), 50 * 1000)

        let monthSelector = new Select(driver.findElement(By.className(this.PracticeFormDateSelectorByMonthClass)))
        let yearSelector = new Select(driver.findElement(By.className(this.PracticeFormDateSelectorByYearClass)))

        await monthSelector.selectByVisibleText("November");
        await yearSelector.selectByVisibleText("1990");
        await driver.findElement(By.className(this.PracticeFormDateSelectorByDayClass)).click();
    }
    async fillPracticeFormSubjects(driver, s) {
        // let sArray = s.split(",")

        /*Not working, as unable to interact and complete autofill form*/

        driver.findElement(By.className(this.PracticeFormSubjectsClass)).click();
        for (let i = 0; i < s.length; i++) {
            driver.findElement(By.className(this.PracticeFormSubjectsClass)).sendKeys(s[i]);
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
    async fillPracticeFormState(driver, s) {
        await driver.findElement(By.id(this.PracticeFormStateDropDownId)).click();
        await driver.wait(until.elementLocated(By.className(this.PracticeFormStateDropDownListClass)), 50 * 1000)

        /*Not working, unable to select item from dropdown list as web element keeps disappearing*/

        // let allOptions = driver.findElements(By.className(this.PracticeFormStateDropDownListClass))

        // for (let i = 0; i < allOptions.length; i++) {
        //     if (allOptions[i].contains(String(s))) {
        //         await driver.findElement(By.className(allOptions[i])).click();
        //     }
        // }
    }
    fillPracticeFormCity(driver, s) {
        driver.findElement(By.id(this.PracticeFormCityDropDownId)).sendKeys(s);
    }
    fillAllDataExceptLastName(driver, data) {
        // this.fillPracticeFormFirstName(driver, data['firstName']) //working

        // this.fillPracticeFormEmail(driver, data['email']) //working
        // this.fillPracticeFormGender(driver, data['gender']) //working
        // this.fillPracticeFormMobile(driver, data['mobile']) //working
        // this.fillPracticeFormDateOfBirth(driver, data['dateOfBirth']) //working
        // this.fillPracticeFormSubjects(driver, data['subjects'])
        // this.fillPracticeFormHobbies(driver, data['hobbies']) //working
        this.fillPracticeFormUploadPicture(driver, data['picture']) //working on local
        // this.fillPracticeFormCurrentAddress(driver, data['address']) //working
        // this.fillPracticeFormState(driver, data['state'])
        // this.fillPracticeFormCity(driver, data['city'])
    }
    fillDataLastName(driver, data) {
        this.fillPracticeFormLastName(driver, data['lastName']) //working but don't use
    }
    submitData(driver) {
        driver.findElement(By.id(this.PracticeFormSubmitButtonId)).click();
    }
}

module.exports = new FormsPage();