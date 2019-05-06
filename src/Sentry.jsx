import React from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({
 dsn: "https://1442c54e2f3046179cc4c7b20a5a5fe1@sentry.io/1435705"
});

// go to https://sentry.io/organizations/e-liberty/issues/

export const SentryPOC = () => {
  const handleOnClick = event => {
    console.log('Sentry::\"onClick Sentry\" -> ', "handleOnClick Sentry");
    Sentry.showReportDialog({ eventId: "click" });
    Sentry.captureException(event);
  };

  const handleFetchClick = () => {
    fetch('/maressourcequinexistepas/').then(result => {
      console.log('Sentry::\"handleFetchClick\" -> ', "handleFetchClick Sentry");
        Sentry.showReportDialog(result);
      }
    ).catch(
      error => {
        console.log('Sentry::error -> ', error);
        Sentry.captureException(error);
      }
    )
  };

  return (
    <div>
      <button value="Click for click event sentry" type="button" onClick={handleOnClick}>
        Button click event sentry
      </button>
      <button value="Click for error fecth event sentry" type="button" onClick={handleFetchClick}>
        Button fetch event sentry
      </button>
    </div>
  )
};

export default SentryPOC;
