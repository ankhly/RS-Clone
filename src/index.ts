import './style.scss';

import { listeners } from './logic/listeners';
import { showCreateBlock, showExamplesBlock, showExamplesBlockInInfo } from './logic/showPages';
import { renderHtml } from './components/mainRender';
import { renderCreatePage } from './components/pageCreate/create';
import { galleryPage } from './components/pageGallery/gallery';
import { examplesPage } from './components/pageExamples/examples';
import { infoPage } from './components/pageInfo/info';
import { mainPage } from './components/pageMain/main';
import { animationLogic } from './logic/animation';
import { converterLogic } from './services/API-converter';
import { weatherLogic } from './services/API-wether';
import { globalState } from './store/store';
import { LocalStorageKeys, ViewPage } from './utils/types';
import { historyResolver } from './logic/routing';

if (globalState.view === ViewPage.main) {
  historyResolver(ViewPage.main);
  renderHtml(mainPage());
  animationLogic();
  converterLogic();
  await weatherLogic();
  await showExamplesBlock();
}
if (globalState.view === ViewPage.create) {
  renderHtml(renderCreatePage());
  animationLogic();
  await showCreateBlock();
}
if (globalState.view === ViewPage.gallery) {
  renderHtml(galleryPage());
  animationLogic();
}
if (globalState.view === ViewPage.examples) {
  renderHtml(examplesPage());
  animationLogic();
  await showExamplesBlock();
}
if (globalState.view === ViewPage.info) {
  renderHtml(infoPage());
  animationLogic();
  await showExamplesBlockInInfo();
}

listeners();

window.addEventListener('popstate', async (event: PopStateEvent): Promise<void> => {
  event.preventDefault();

  const queryString: string = window.location.search;

  if (queryString.includes(ViewPage.main)) {
    renderHtml(mainPage());
    clearInterval(animationLogic());
    converterLogic();
    await weatherLogic();
    await showExamplesBlock();

    localStorage.setItem(LocalStorageKeys.view, ViewPage.main);
  }
  if (queryString.includes(ViewPage.create)) {
    renderHtml(renderCreatePage());

    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();
  }
  if (queryString.includes(ViewPage.gallery)) {
    renderHtml(galleryPage());

    localStorage.setItem(LocalStorageKeys.view, ViewPage.gallery);
  }
  if (queryString.includes(ViewPage.examples)) {
    renderHtml(examplesPage());

    localStorage.setItem(LocalStorageKeys.view, ViewPage.examples);
    await showExamplesBlock();
  }
  if (queryString.includes(ViewPage.info)) {
    renderHtml(infoPage());
    await showExamplesBlockInInfo();

    localStorage.setItem(LocalStorageKeys.view, ViewPage.info);
  }
});
