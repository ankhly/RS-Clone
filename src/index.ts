import './style.scss';

import { changePage } from './components/showPages';
import { renderPopup, closePopup, chooseLanguage } from './logic/changeLanguage';
import { colorMod, getColorMod } from './logic/colorMod';

import { listeners } from './logic/listeners';
import { globalState } from './store/store';
import { ViewPage } from './utils/types';
import { showCreateBlock, showExamplesBlock, showExamplesBlockInInfo } from './logic/showPages';
import { renderHtml } from './components/mainRender';
import { renderCreatePage } from './components/pageCreate/create';
import { galleryPage } from './components/pageGallery/gallery';
import { examplesPage } from './components/examples/examples';
import { infoPage } from './components/pageInfo/info';
import { mainPage } from './components/pageMain/main';
import { animationLogic } from './logic/animation';
import { converterLogic } from './services/API-converter';
import { weatherLogic } from './services/API-wether';

if (globalState.view === ViewPage.main) {
  renderHtml(mainPage());
  animationLogic();
  converterLogic();
  weatherLogic();
  await showExamplesBlock();
}
if (globalState.view === ViewPage.create) {
  renderHtml(renderCreatePage());
  await showCreateBlock();
}
if (globalState.view === ViewPage.gallery) {
  renderHtml(galleryPage());
}
if (globalState.view === ViewPage.examples) {
  renderHtml(examplesPage());
  await showExamplesBlock();
}
if (globalState.view === ViewPage.info) {
  renderHtml(infoPage());
  await showExamplesBlockInInfo();
}

getColorMod();
listeners();

const documentClick = async (e: Event) => {
  colorMod(e);
  renderPopup(e);
  closePopup(e);
  chooseLanguage(e);
  await changePage(e);
};

document.addEventListener('click', documentClick);
