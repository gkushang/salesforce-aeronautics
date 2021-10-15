export {};
const { accountsLandingPage } = inject();
Given(/he creates the new account/, () => {
  accountsLandingPage.open();
});
