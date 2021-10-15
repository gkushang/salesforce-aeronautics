/// <reference types='codeceptjs' />
type accountsLandingPage = typeof import('./tests/acceptance/pages/accounts/accounts-landing.page');
type accountsNewPage = typeof import('./tests/acceptance/pages/accounts/accounts-new.page');
type loginPage = typeof import('./tests/acceptance/pages/login/login.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');
type PlaywrightHelper = import('codeceptjs-configure/lib/helpers/playwright.helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, accountsLandingPage: accountsLandingPage, accountsNewPage: accountsNewPage, loginPage: loginPage, page: page }
  interface Methods extends REST, WebDriver, PlaywrightHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
