import { renderHtml } from './mainRender';
import { galleryPage } from './gallery';
import { infoPage } from './info';
import { renderCreatePage } from './create';
import { LocalStorageKeys, ViewPage } from '../Max/types';
import {showCreateBlock, showExamplesBlock, showExamplesBlockInInfo} from '../Max/logic/showPages';
import { examplesPage } from './examples/examples';
import { mainPage } from './main';
import { animationLogic } from '../feature/animation';
import { converterLogic } from '../aside/converter';
import { weatherLogic } from '../aside/wether';

export const changePage = async (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('menu0')) {
    renderHtml(mainPage());
    clearInterval(animationLogic());
    converterLogic();
    weatherLogic();
    await showExamplesBlock();

    localStorage.setItem(LocalStorageKeys.view, ViewPage.main);
  }

  const menuLinks = document.querySelectorAll('.menu__link') as NodeListOf<Element>;
  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i] as HTMLElement;
    if (e.target === menuLink && menuLink.classList.contains('menu1')) {
      renderHtml(renderCreatePage());

      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showCreateBlock();
    }
    if (e.target === menuLink && menuLink.classList.contains('menu2')) {
      renderHtml(galleryPage());

      localStorage.setItem(LocalStorageKeys.view, ViewPage.gallery);
    }
    if (e.target === menuLink && menuLink.classList.contains('menu3')) {
      renderHtml(examplesPage());

      localStorage.setItem(LocalStorageKeys.view, ViewPage.examples);
      await showExamplesBlock();
    }
    if (e.target === menuLink && menuLink.classList.contains('menu4')) {
      renderHtml(infoPage());
      await showExamplesBlockInInfo();

      localStorage.setItem(LocalStorageKeys.view, ViewPage.info);
    }
  }
};
