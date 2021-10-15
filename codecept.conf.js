// load env variables - this should be the first line of config
require("dotenv-extended").config({
  path: "./tests/acceptance/config/codecept.dev.env",
  defaults: "./tests/acceptance/config/codecept.env",
});
require("ts-node/register");

const { configure, cleanReports } = require("codeceptjs-configure");
const REPORT_OUTPUT_DIR = "./tests/acceptance/report";

let conf = {
  name: "Aeronautics Acceptance Automated Tests",

  output: REPORT_OUTPUT_DIR,

  bootstrap: (callback) => {
    cleanReports({ path: REPORT_OUTPUT_DIR, relativePath: "/", callback });
  },

  helpers: {
    PlaywrightHelper: {
      require: "codeceptjs-configure/lib/helpers/playwright.helper.js",
    },
  },

  plugins: {
    shadowDom: {
      enabled: process.env.ENABLE_SHADOW_DOM_SUPPORT === "true",
      require: "./tests/acceptance/plugins/shadow-dom.plugin.js",
    },
    autoDelay: {
      enabled: true,
      delayBefore: 500,
    },
    retryFailedStep: {
      enabled: true,
      factor: 2,
      minTimeout: 3000,
      retries: 10,
    },
  },
};

exports.config = configure.create(conf);
