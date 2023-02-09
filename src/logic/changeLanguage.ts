import { lang } from '../utils/translate';
import { renderLanguagePopup } from '../components/popupLanguage/popupLanguage';

const changeLanguage = (language:string)=>{
  for (const k in lang) {
    const element = document.querySelector('.' + k) as HTMLElement;
    if (element) {
      element.innerHTML = lang[k][language];
    }
  }
};

export const renderPopup = (e:Event)=>{
  const languageIcon = document.querySelector('.actions__language') as HTMLElement;
  if (e.target === languageIcon) {
    renderLanguagePopup();
  }
};

export const closePopup = (e:Event)=>{
  const popup = document.querySelector('.popup') as HTMLElement;
  const popupCloseBtn = document.querySelector('.popup__close') as HTMLElement;
  if (e.target === popup || e.target === popupCloseBtn) {
    popup.remove();
  }
};

const changeIconLanguage = (language:string)=>{
  const iconLanguage = document.querySelector('.actions__language') as HTMLElement;
  if (language === 'ru') {
    iconLanguage.classList.remove('uk');
    iconLanguage.classList.add('ru');
  }
  if (language === 'uk') {
    iconLanguage.classList.remove('ru');
    iconLanguage.classList.add('uk');
  }
};

export const chooseLanguage = (e:Event) => {
  const popup = document.querySelector('.popup') as HTMLElement;
  const ru = document.querySelector('.popup__lang_ru') as HTMLElement;
  const uk = document.querySelector('.popup__lang_en') as HTMLElement;
  if (e.target === ru) {
    changeLanguage('ru');
    localStorage.setItem('language', 'ru');
    popup.remove();
    changeIconLanguage('ru');
  }
  if (e.target === uk) {
    changeLanguage('uk');
    localStorage.setItem('language', 'uk');
    popup.remove();
    changeIconLanguage('uk');
  }
};

export const getLanguage = () => {
  const customLanguage = localStorage.getItem('language') || 'ru';
  changeLanguage(customLanguage);
  changeIconLanguage(customLanguage);
};
