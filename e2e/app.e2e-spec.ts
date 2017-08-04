import { StudyTestsAngular2Page } from './app.po';

describe('study-tests-angular2 App', () => {
  let page: StudyTestsAngular2Page;

  beforeEach(() => {
    page = new StudyTestsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
