import { PostappsPage } from './app.po';

describe('postapps App', () => {
  let page: PostappsPage;

  beforeEach(() => {
    page = new PostappsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
