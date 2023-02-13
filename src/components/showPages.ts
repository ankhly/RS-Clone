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
import { menuClose, burgerMenu } from './header/header';
import { historyResolver } from '../logic/routing';

export const changePage = async (e: MouseEvent): Promise<void> => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('menu0')) {
    historyResolver(ViewPage.main);

    renderHtml(mainPage());
    clearInterval(animationLogic());
    converterLogic();
    await weatherLogic();
    await showExamplesBlock();
    menuClose();
    burgerMenu();
    localStorage.setItem(LocalStorageKeys.view, ViewPage.main);
  }

  const menuLinks = document.querySelectorAll('.menu__link') as NodeListOf<Element>;
  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i] as HTMLElement;
    if (e.target === menuLink && menuLink.classList.contains('menu1')) {
      historyResolver(ViewPage.create);
      renderHtml(renderCreatePage());
      menuClose();
      burgerMenu();
      renderHtml(renderCreatePage());
      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showCreateBlock();
    }
    if (e.target === menuLink && menuLink.classList.contains('menu2')) {
      renderHtml(galleryPage());
      menuClose();
      burgerMenu();
      localStorage.setItem(LocalStorageKeys.view, ViewPage.gallery);
    }
    if (e.target === menuLink && menuLink.classList.contains('menu3')) {
      historyResolver(ViewPage.gallery);
      renderHtml(examplesPage());
      menuClose();
      burgerMenu();
      renderHtml(galleryPage());
      localStorage.setItem(LocalStorageKeys.view, ViewPage.gallery);
    }
    if (e.target === menuLink && menuLink.classList.contains('menu3')) {
      historyResolver(ViewPage.examples);

      renderHtml(examplesPage());
      localStorage.setItem(LocalStorageKeys.view, ViewPage.examples);
      await showExamplesBlock();
    }
    if (e.target === menuLink && menuLink.classList.contains('menu4')) {
      historyResolver(ViewPage.info);

      renderHtml(infoPage());
      await showExamplesBlockInInfo();
      menuClose();
      burgerMenu();
      localStorage.setItem(LocalStorageKeys.view, ViewPage.info);
    }
  }
};
