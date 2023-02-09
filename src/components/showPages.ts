import { renderHtml } from './mainRender';
import { galleryPage } from './pageGallery/gallery';
import { infoPage } from './pageInfo/info';
import { renderCreatePage } from './pageCreate/create';
import { LocalStorageKeys, ViewPage } from '../utils/types';
import { showCreateBlock, showExamplesBlock, showExamplesBlockInInfo } from '../logic/showPages';
import { examplesPage } from './pageExamples/examples';
import { mainPage } from './pageMain/main';
import { animationLogic } from '../logic/animation';
import { converterLogic } from '../services/API-converter';
import { weatherLogic } from '../services/API-wether';

export const changePage = async (e: MouseEvent): Promise<void> => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('menu0')) {
    renderHtml(mainPage());
    clearInterval(animationLogic());
    converterLogic();
    await weatherLogic();
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
