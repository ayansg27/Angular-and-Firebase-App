import { CarListingsPage } from './app.po';

describe('car-listings App', function() {
  let page: CarListingsPage;

  beforeEach(() => {
    page = new CarListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
