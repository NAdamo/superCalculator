import {SuperCalculatorPage} from './app.po';
import {by, element} from 'protractor';

describe('super-calculator App', () => {
  let page: SuperCalculatorPage;

  beforeEach(() => {
    page = new SuperCalculatorPage();
    page.navigateTo();

    page.clearInputFields('firstOperand');
    page.clearInputFields('secondOperand');
  });

  afterEach(() => {
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('Super Calculator');
  });

  it('should add by default one and two', () => {
    page.inputSendKeys('firstOperand', 1);
    page.inputSendKeys('secondOperand', 2);
    page.clickCalculateButton();

    expect(page.getResultText()).toEqual('3');

  });

  it('should add by default three and four', () => {

    page.inputSendKeys('firstOperand', 3);
    page.inputSendKeys('secondOperand', 4);
    page.clickCalculateButton();

    expect(page.getResultText()).toEqual('7');
  });

  it('should have a history', () => {
    page.add(1, 2);
    page.add(3, 4);

    expect(page.getHistoryElements().count()).toEqual(2);

    page.add(5, 6);

    expect(page.getHistoryElements().count()).toEqual(3);
  });
  it('should have a first history element 1 + 2 and last history element 3 + 4', () => {

    page.add(1, 2);
    page.add(3, 4);

    expect(page.getHistoryElements().first().getText()).toContain('1 + 2');
    expect(page.getHistoryElements().last().getText()).toContain('3 + 4');
  });
});
