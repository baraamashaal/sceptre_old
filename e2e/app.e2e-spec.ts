import { SceptrePage } from './app.po';

describe('sceptre App', () => {
  let page: SceptrePage;

  beforeEach(() => {
    page = new SceptrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sp works!');
  });
});
