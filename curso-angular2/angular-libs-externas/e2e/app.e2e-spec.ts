import { AngularLibsExternasPage } from './app.po';

describe('angular-libs-externas App', function() {
  let page: AngularLibsExternasPage;

  beforeEach(() => {
    page = new AngularLibsExternasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
