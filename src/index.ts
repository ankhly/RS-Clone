import './style.scss';

import './page-create/page-create';
import { colorMod, renderPopup, closePopup, chooseLanguage } from './page-create/page-create';
=======
import './layout/info';
import './layout/main';
import './layout/animation';
import './layout/gallery';


const documentClick = (e:Event)=>{
  colorMod(e);
  renderPopup(e);
  closePopup(e);
  chooseLanguage(e);
};

document.addEventListener('click', documentClick);