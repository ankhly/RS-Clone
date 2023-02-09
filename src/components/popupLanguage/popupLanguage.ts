export const renderLanguagePopup = (): string => {
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
    </div>
  `;

  wrapper.insertAdjacentHTML('afterbegin', popup);

  return popup;
};
