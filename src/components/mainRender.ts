import { renderHeader } from './header/header';
import { getLanguage } from '../logic/changeLanguage';
import { getColorMod } from '../logic/colorMod';
import { renderFooter } from './footer/footer';
import { pageUp } from './scroll/pageUp';

export const renderHtml = (page:string): void => {
  const body = document.querySelector('body') as HTMLElement;

  const content = `
    <div class="wrapper">
    <main class="page">
      <div class="progress-bar" id="progress-bar"></div>
        ${pageUp()}
        <div class="page__container container"></div>
    </main>
    </div>
  `;

  const wrapper = document.querySelector('.wrapper') as HTMLElement;
  const header = document.querySelector('.header') as HTMLElement;
  const footer = document.querySelector('.footer') as HTMLElement;

  if (!wrapper) {
    body.insertAdjacentHTML('beforeend', content);
  }
  if (!header) {
    renderHeader();
  }
  if (!footer) {
    renderFooter();
  }

  const container = document.querySelector('.page__container') as HTMLElement;
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', page);

  getLanguage();
  getColorMod();
};
