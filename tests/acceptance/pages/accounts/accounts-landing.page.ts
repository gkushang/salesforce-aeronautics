const { I } = inject();
// page class can be extended
class AccountsLandingPage {
  locators = {};

  open() {
    I.amOnPage(process.env.ACCOUNTS_ENDPOINT);
  }
}

export = new AccountsLandingPage();
