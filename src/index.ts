import './style.scss';
import './page-create/page-create';
import { colorMod, renderPopup, closePopup, chooseLanguage } from './page-create/page-create';

const documentClick = (e:Event)=>{
  colorMod(e);
  renderPopup(e);
  closePopup(e);
  chooseLanguage(e);
};

document.addEventListener('click', documentClick);