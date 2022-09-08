// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  key: 'bu4f8kn48v6uehqi3cqg',
  symbolUrl: 'https://finnhub.io/api/v1/quote?',
  sentimentDetailsUrl: 'https://finnhub.io/api/v1/stock/insider-sentiment?',
  lookUpSymbolUrl: 'https://finnhub.io/api/v1/search?q='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.