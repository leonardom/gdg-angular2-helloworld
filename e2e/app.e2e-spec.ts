import { GdgTestPage } from './app.po';

describe('gdg-test App', function() {
  let page: GdgTestPage;

  beforeEach(() => {
    page = new GdgTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
