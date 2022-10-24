const { By } = require('selenium-webdriver');

class CheckBoxPage {
    get CheckBoxId() { return "item-1" }
    get HomeCollapsedArrowBtnClass() { return "rct-collapse" }
    get DesktopCollapsedArrowBtnXPath() { return "//*[@id='tree-node']/ol/li/ol/li[1]/span/button" }
    get DesktopXPath() { return "//span[text()='Desktop']" }
    get CommandsCheckBoxXPath() { return "//*[@id='tree-node']/ol/li/ol/li[1]/ol/li[2]/span/label/span[1]" }
    get SelectionResultClass() { return "text-success" }
}

module.exports = new CheckBoxPage();