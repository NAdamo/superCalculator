import {browser, element, by} from 'protractor';

export class SuperCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sc-root h1')).getText();
  }

  getResultText() {
    return element(by.css('sc-calculator-result')).getText();
  }

  inputSendKeys(inputId, keyValue) {
    element(by.id(inputId)).sendKeys(keyValue);
  }

  clickCalculateButton() {
    element(by.id('calculateButton')).click();
  }

  clearInputFields(inputId) {
    element(by.id(inputId)).clear();
  }

  add(a, b) {
    this.clearInputFields('firstOperand');
    this.clearInputFields('secondOperand');
    this.inputSendKeys('firstOperand', a);
    this.inputSendKeys('secondOperand', b);
    this.clickCalculateButton();
  }

  getHistoryElements() {
    return element.all(by.css('sc-calculator-history table tbody tr'));
  }
}
