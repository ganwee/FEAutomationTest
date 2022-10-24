class HomePage {
    get formsBoxXPath(){
        return "//h5[text()='Forms']";
    }
}

module.exports = new HomePage();