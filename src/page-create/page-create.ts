import { lang } from '../utils/translate';

const body = document.querySelector('body') as HTMLElement;

const renderHeader = ():string=>{
  const wrapper = document.querySelector('.wrapper') as HTMLElement;
  const header = `
  <header class="header">
  <div class="header__container container">
    <div class="header__body">
      <a href="" class="header__logo">
        <img src="./assetsStatic/logo.png" alt="">
      </a>
      <div class="header__content">
        <a href="" class="header__title">Графики / Диаграммы</a>
        <div class="header__menu menu">
          <nav class="menu__body">
            <ul class="menu__list">
              <li class="menu__item"><a href="" class="menu__link menu1">Создать</a></li>
              <li class="menu__item"><a href="" class="menu__link menu2">Галерея</a></li>
              <li class="menu__item"><a href="" class="menu__link menu3">Примеры</a></li>
              <li class="menu__item"><a href="" class="menu__link menu4">Инфо</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="header__actions actions">
        <button class="actions__bg actions__bg_black"></button>
        <button class="actions__language ru"></button>
      </div>
    </div>
  </div>
</header>`;
  wrapper.insertAdjacentHTML('afterbegin', header);
  return header;
};

const addStr = ():string=>{
  const str = `
 <div class="data-table__table-row">
  <input type="text" value="Cтрока 2" class="data-table__title-inp inp">
  <input type="text" value="2" class="data-table__input inp">
  <button class="data-table__del"></button>
</div>`;
  return str; 
};

const addColumn = ()=>{
  const tableRowTitle = document.querySelector('.data-table__table-row-title') as HTMLElement;
  const btnDels = document.querySelectorAll('.data-table__del') as NodeListOf<Element>;
  const addRowY = `
  <div class="data-table__item">
    <div class="data-table__coord">Y</div>
    <input type="text" value="Заголовок" class="data-table__title inp">
 </div>`;
  const addRow = `
<input type="text" value="0" class="data-table__input inp">`;

  for (let i = 0; i < btnDels.length; i++) {
    const tableInput = btnDels[i];
    tableInput.insertAdjacentHTML('beforebegin', addRow);
  }
  tableRowTitle.insertAdjacentHTML('beforeend', addRowY);
};

const renderCreatePage = ():string=>{
  const createPage = `
  <div class="page__create create-page">
  <h1 class="create-page__title">Создать график/диаграмму онлайн</h1>
  <div class="create-page__body">
    <div class="create-page__content">
      <div class="create-page__view view-create">

      </div>
      <div class="create-page__chart chart-create">

      </div>
      <div class="create-page__actions actions-create">
        <div class="actions-create__data data-actions">
          <h3 class="data-actions__title title-create">Таблица данных</h3>
          <div class="data-actions__body">
            <div class="data-actions__table data-table">
              <div class="data-table__body">
                <div class="data-table__table-row-title">
                  <div class="data-table__item">
                    <div class="data-table__coord">X</div>
                    <input type="text" value="Заголовок" class="data-table__title inp">
                  </div>
                  <div class="data-table__item">
                    <div class="data-table__coord">Y</div>
                    <input type="text" value="Заголовок" class="data-table__title inp">
                  </div>
                </div>
                <div class="data-table__table-row">
                  <input type="text" value="Cтрока 1" class="data-table__title-inp inp">
                  <input type="text" value="1" class="data-table__input inp">
                  <button class="data-table__del"></button>
                </div>
                <div class="data-table__table-row">
                  <input type="text" value="Cтрока 2" class="data-table__title-inp inp">
                  <input type="text" value="2" class="data-table__input inp">
                  <button class="data-table__del"></button>
                </div>


              </div>
            </div>
            <div class="data-actions__add data-add">
              <button class="data-add__add btn-add btn-add_str">+ Строка</button>
              <button class="data-add__add btn-add btn-add_col">+ Столбец</button>
            </div>
          </div>
          <button class="data-actions__button update">Обновить график</button>
        </div>
        <div class="actions-create__settings settings-actions">
          <h3 class="settings-actions__title title-create">Настройки графика</h3>
          <div class="settings-actions__body">
            <div class="settings-actions__setting">
              <div class="settings-actions__item">
                <div class="settings-actions__sub-title">Ширина</div>
                <input type="text" value="800px" class="settings-actions__width inp">
              </div>
              <div class="settings-actions__item">
                <div class="settings-actions__sub-title">Высота</div>
                <input type="text" value="400px" class="settings-actions__height inp">
              </div>
            </div>
            <button class="settings-actions__button update">Применить</button>
          </div>
        </div>
      </div>
    </div>
    <div class="create-page__how how-create">
      <div class="how-create__body">
        <h2 class="how-create__title">Как создать график/диаграмму онлайн</h2>
        <div class="how-create__description">
          <div class="how-create__step"><span class="one">1. </span><i class="step1">Выберите вид графика</i></div>
          <div class="how-create__step"><span class="two">2. </span><i class="step2">Заполните таблицу данных</i></div>
          <div class="how-create__step"><span class="three">3. </span><i class="step3">Готово!</i></div>
        </div>
        <div class="how-create__buttons">
          <button class="how-create__read button-create btncreate1">Читать подробнее</button>
          <button class="how-create__look button-create btncreate2">Смотреть примеры</button>
        </div>
      </div>
    </div>
  </div>
</div>`;
  return createPage;
};


const renderPage = (page:string)=>{
  const content = `
  <div class="wrapper">
  <main class="page">
    <div class="page__container container">
        ${page}
      </div>
    </main>
  </div>`;
  body.insertAdjacentHTML('beforeend', content);
  renderHeader();
};

const renderLanguagePopup = ():string=>{
  const wrapper = document.querySelector('.wrapper') as HTMLElement;
  const popup = `
  <div class="popup">
  <div class="popup__content">
    <button class="popup__close"></button>
    <div class="popup__body">
      <div class="popup__lang popup__lang_en">English</div>
      <div class="popup__lang popup__lang_ru">Русский</div>
    </div>
  </div>
</div>`;
  wrapper.insertAdjacentHTML('afterbegin', popup);
  return popup;
};

renderPage(renderCreatePage());

const colorModBtn = document.querySelector('.actions__bg') as HTMLElement;
const html = document.querySelector('html') as HTMLElement;
const colorModParams = {
  icon:false,
  bg:false,
};

export const colorMod = (e:Event)=>{
  if (e.target === colorModBtn) {
    colorModParams.icon =  colorModBtn.classList.toggle('white');
    colorModParams.bg =  html.classList.toggle('dark');
    localStorage.setItem('bg', JSON.stringify(colorModParams));
  }
};

const getColorMod = ()=>{
  const getColorModParam = JSON.parse(localStorage.getItem('bg') || JSON.stringify(colorModParams));
  if (getColorModParam.icon === true && getColorModParam.bg === true ) {
    colorModBtn.classList.add('white');
    html.classList.add('dark');
  }
};

getColorMod();


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

export const chooseLanguage = (e:Event)=>{
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

const customLanguage = localStorage.getItem('language') || 'ru';
changeLanguage(customLanguage);
changeIconLanguage(customLanguage);