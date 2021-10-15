declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    ORG_HOST: string;
    ORG_USERNAME: string;
    ORG_PASSWORD: string;
    MAX_WAIT_TIME: string;

    ACCOUNTS_ENDPOINT: string;
  }
}
