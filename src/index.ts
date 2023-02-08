import './style.scss';

import { changePage } from './layout/showPages';
import { renderPopup, closePopup, chooseLanguage } from './feature/changeLanguage';
import { colorMod, getColorMod } from './feature/colorMod';

import { listeners } from './Max/logic/listeners';
import { globalState } from './Max/services/store';
import { ViewPage } from './Max/types';
import { showPage1, showPage2 } from './Max/logic/showPages';
import { renderHtml } from './layout/mainRender';
import { renderCreatePage } from './layout/create';
import { galleryPage } from './layout/gallery';
import { examplesPage } from './layout/examples/examples';
import { infoPage } from './layout/info';
import { mainPage } from './layout/main';
import { animationLogic } from './feature/animation';
import { converterLogic } from './aside/converter';
import { weatherLogic } from './aside/wether';

if (globalState.view === ViewPage.main) {
  renderHtml(mainPage());
  await showPage2();
  animationLogic();
  converterLogic();
  weatherLogic();
}
if (globalState.view === ViewPage.create) {
  renderHtml(renderCreatePage());
  await showPage1();
}
if (globalState.view === ViewPage.gallery) {
  renderHtml(galleryPage());
}
if (globalState.view === ViewPage.examples) {
  renderHtml(examplesPage());
  await showPage2();
}
if (globalState.view === ViewPage.info) {
  renderHtml(infoPage());
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
