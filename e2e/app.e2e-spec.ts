import { ValidatiorClientPage } from './app.po';

describe('validatior-client App', () => {
  let page: ValidatiorClientPage;

  beforeEach(() => {
    page = new ValidatiorClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
