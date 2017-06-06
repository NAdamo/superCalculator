import { SuperCalculatorPage } from './app.po';

describe('super-calculator App', () => {
  let page: SuperCalculatorPage;

  beforeEach(() => {
    page = new SuperCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sc works!');
  });
});
