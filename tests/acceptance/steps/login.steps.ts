export {};
import { env } from "process";
const { loginPage } = inject();
Given(/Fred logs into the aeronautics org as non-admin user/, () => {
  loginPage.open();
  loginPage.loginToOrg({
    username: env.ORG_USERNAME,
    password: env.ORG_PASSWORD,
  });
});
