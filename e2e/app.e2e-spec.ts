import { SpaceBasePage } from './app.po';

describe('space-base App', function() {
  let page: SpaceBasePage;

  beforeEach(() => {
    page = new SpaceBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
