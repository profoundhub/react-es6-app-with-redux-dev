import Raven from 'raven-js';

const sentry_key = '96a2fdf024204bcf94cb55cc1cc6a330';
const sentry_app = '111528';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

// Raven.config('https://96a2fdf024204bcf94cb55cc1cc6a330@sentry.io/111528').install();

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
