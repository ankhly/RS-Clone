import { renderHeader } from './header/header';
import { getLanguage } from '../logic/changeLanguage';
import { getColorMod } from '../logic/colorMod';

export const renderHtml = (page:string): void => {
  const body = document.querySelector('body') as HTMLElement;

  const content = `
    <div class="wrapper">
    <main class="page">
      <div class="page__container container"></div>
      </main>
    </div>
  `;

  const wrapper = document.querySelector('.wrapper') as HTMLElement;
  const header = document.querySelector('.header') as HTMLElement;

  if (!wrapper) {
    body.insertAdjacentHTML('beforeend', content);
  }
  if (!header) {
    renderHeader();
  }

  const container = document.querySelector('.page__container') as HTMLElement;
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', page);

  getLanguage();
  getColorMod();
};
