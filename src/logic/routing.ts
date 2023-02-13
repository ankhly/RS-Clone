import { ViewPage } from '../utils/types';

export const historyResolver = (location: string): void => {
  let locationString: string = '';

  if (location === ViewPage.main) {
    locationString = `/?${location}`;
  }
  if (location === ViewPage.create) {
    locationString = `/?${location}`;
  }
  if (location === ViewPage.gallery) {
    locationString = `/?${location}`;
  }
  if (location === ViewPage.examples) {
    locationString = `/?${location}`;
  }
  if (location === ViewPage.info) {
    locationString = `/?${location}`;
  }

  window.history.pushState({}, '', locationString);
};
