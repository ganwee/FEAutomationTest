const { By } = require('selenium-webdriver');

class RadioButtonPage {
    get RadioButtonId() { return "item-2" }
    get ImpressiveRadioButtonXPath() { return "//*[@id='app']/div/div/div[2]/div[2]/div[2]/div[3]" }
    get SelectionResultClass() { return "text-success" }
}

module.exports = new RadioButtonPage();