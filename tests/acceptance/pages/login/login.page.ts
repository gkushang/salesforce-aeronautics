const { I } = inject();
import { env } from "process";
// page class can be extended
class LoginPage {
  locators = {
    username: { css: 'input[id="username"]' },
    password: { css: 'input[id="password"]' },
  };

  /**
   * Go to Login Page
   */
  open() {
    I.amOnPage(process.env.HOST);
  }

  /**
   * Login to ORG
   * @param loginInfo
   */
  loginToOrg(loginInfo: { username: string; password: string }) {
    I.fillField(this.locators.username, loginInfo.username);
    I.fillField(this.locators.password, loginInfo.password);
    I.pressKey("Enter");
    pause();
    I.waitForInvisible(this.locators.username, +env.MAX_WAIT_TIME);
  }
}

export = new LoginPage();
