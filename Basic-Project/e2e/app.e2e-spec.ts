import { BasicProjectPage } from './app.po';

describe('basic-project App', () => {
  let page: BasicProjectPage;

  beforeEach(() => {
    page = new BasicProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
