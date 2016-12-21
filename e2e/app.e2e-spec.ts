import { Ang2TodoFinalPage } from './app.po';

describe('ang2-todo-final App', function() {
  let page: Ang2TodoFinalPage;

  beforeEach(() => {
    page = new Ang2TodoFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
