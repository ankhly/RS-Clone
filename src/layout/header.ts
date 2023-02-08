export const renderHeader = ():string=>{
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
              <li class="menu__item"><button href="" class="menu__link menu1">Создать</button></li>
              <li class="menu__item"><button href="" class="menu__link menu2">Галерея</button></li>
              <li class="menu__item"><button href="" class="menu__link menu3">Примеры</button></li>
              <li class="menu__item"><button href="" class="menu__link menu4">Инфо</button></li>
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