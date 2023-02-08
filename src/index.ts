import './style.scss';
import './layout/mainRender';

import { changePage } from './layout/showPages';
import { renderPopup, closePopup, chooseLanguage } from './feature/changeLanguage';
import { colorMod } from './feature/colorMod';
import './feature/animation';
import './aside/wether';
import './aside/converter';

import { listeners } from './Max/logic/listeners';
import { globalState } from './Max/services/store';
import { ViewPage } from './Max/types';
import { showPage1, showPage2 } from './Max/logic/showPages';

if (globalState.view === ViewPage.create) {
  await showPage1();
}
if (globalState.view === ViewPage.examples) {
  await showPage2();
}

listeners();

const documentClick = (e:Event)=>{
  colorMod(e);
  renderPopup(e);
  closePopup(e);
  chooseLanguage(e);
  changePage(e);
};

document.addEventListener('click', documentClick);
