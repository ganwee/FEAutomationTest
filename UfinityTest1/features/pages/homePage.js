class HomePage {
    get elementsBoxXPath(){
        return "//h5[text()='Elements']";
    }
}

module.exports = new HomePage();