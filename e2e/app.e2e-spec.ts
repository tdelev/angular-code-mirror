import { Ng2CmPage } from './app.po';

describe('ng2-cm App', () => {
  let page: Ng2CmPage;

  beforeEach(() => {
    page = new Ng2CmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
