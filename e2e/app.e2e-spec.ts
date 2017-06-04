import { AngularTestaRangeCalculatorPage } from './app.po';

describe('angular-testa-range-calculator App', () => {
  let page: AngularTestaRangeCalculatorPage;

  beforeEach(() => {
    page = new AngularTestaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
