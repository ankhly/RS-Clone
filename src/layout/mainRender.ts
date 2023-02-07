import { mainPage } from './main';
import { getLanguage } from '../feature/changeLanguage';
import { renderHeader } from './header';


export const renderHtml = (page:string)=>{
  const body = document.querySelector('body') as HTMLElement;
  const content = `
  <div class="wrapper">
  <main class="page">
    <div class="page__container container">
      </div>
    </main>
  </div>`;
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
};

renderHtml(mainPage());
