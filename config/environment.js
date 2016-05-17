/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'stock',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy: {
      "style-src": "'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com",
      "font-src": "'self' data: https://maxcdn.bootstrapcdn.com",
      "object-src": "'self'"
    },

    APP: {

      NAME: 'stock.goodcity',
      SHA: process.env.APP_SHA || "00000000",
      VERSION: process.env.VERSION || "1.0.0",

      NAMESPACE: 'api/v1',
      HK_COUNTRY_CODE: '+852',

      AIRBRAKE_HOST: "https://errbit.crossroads.org.hk",
      AIRBRAKE_PROJECT_ID: "",
      AIRBRAKE_PROJECT_KEY: "30d9f525c221cd7b00637cdc4eb0d7ae",

    },

    i18n: {
      defaultLocale: 'en'
    },

    cordova: {
      enabled: process.env.EMBER_CLI_CORDOVA !== '0',
      rebuildOnChange: false,
      emulate: false
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST_URL = 'http://localhost:3000';

    ENV.contentSecurityPolicy["connect-src"] = [
      'http://localhost:3000'
    ].join(' ');
  }

  if (environment === 'test') {
    ENV.cordova.enabled = false;

    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.API_HOST_URL = 'http://localhost:4203';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST_URL = 'https://api.goodcity.hk';

    ENV.contentSecurityPolicy["connect-src"] = [
      'https://api.goodcity.hk',
      'https://errbit.crossroads.org.hk'
    ].join(' ');
  }

  if ((process.env.staging || process.env.STAGING) === 'true') {
    ENV.staging = true;
    ENV.APP.API_HOST_URL = 'https://api-staging.goodcity.hk';

    ENV.contentSecurityPolicy["connect-src"] = [
      'https://api-staging.goodcity.hk',
      'https://errbit.crossroads.org.hk'
    ].join(' ');
  } else {
    ENV.staging = false;
  }

  ENV.APP.SERVER_PATH  = ENV.APP.API_HOST_URL + '/' + ENV.APP.NAMESPACE;

  return ENV;
};