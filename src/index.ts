import './style.scss';
import './layout/mainRender';

import { changePage } from './layout/showPages';
import { renderPopup, closePopup, chooseLanguage } from './feature/changeLanguage';
import { colorMod } from './feature/colorMod';
import './feature/animation';
import './aside/wether';
import './aside/converter';


const documentClick = (e:Event)=>{
  colorMod(e);
  renderPopup(e);
  closePopup(e);
  chooseLanguage(e);
  changePage(e);
};

document.addEventListener('click', documentClick);