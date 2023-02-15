import logo from '../../../assets/logo.png';

export const renderHeader = (): string => {
  const wrapper = document.querySelector('.wrapper') as HTMLElement;

  const header = `
    <header class="header">
      <div class="header__container container">
        <div class="header__body">
          <div class="header__logo menu0">
            <p class="logoText menu0">
              <span class="letterRed menu0">E</span>
              <span class="letterOrange menu0">a</span>
              <span class="letterBlue menu0">s</span>
              <span class="letterGreen menu0">y</span>
              <span class="letterRed menu0">C</span>
              <span class="letterOrange menu0">h</span>
              <span class="letterBlue menu0">a</span>
              <span class="letterGreen menu0">r</span>
              <span class="letterRed menu0">t</span>
              <span class="letterOrange menu0">s</span>
            </p>
            <img class="menu0" src=${logo} alt="logo">
          </div>
          <div class="header__content">
            <div class="header__menu menu">
              <nav class="menu__body">
                <ul class="menu__list">
                  <li class="menu__item"><button class="menu__link menu1"></button></li>
                  <li class="menu__item"><button class="menu__link menu2"></button></li>
                  <li class="menu__item"><button class="menu__link menu3"></button></li>
                  <li class="menu__item"><button class="menu__link menu4"></button></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header__actions actions">
            <button class="actions__bg actions__bg_black"></button>
            <button class="actions__language ru"></button>
          </div>
          <button type="button" class="menu__icon icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>`;

  wrapper.insertAdjacentHTML('afterbegin', header);

  return header;
};

export const menuClose = (): void => {
  const iconMenu = document.querySelector('.icon-menu') as HTMLElement;
  const menuBody = document.querySelector('.menu__body') as HTMLElement;
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
};

export const burgerMenu = (): void => {
  const iconMenu = document.querySelector('.menu__icon') as HTMLElement;
  const menuBody = document.querySelector('.menu__body') as HTMLElement;
  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
};
