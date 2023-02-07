export const wether = () => `
  <div class="weather hide-weather">
    <input type="text" class="city" placeholder="[Enter city]" value="Minsk"/>
    <i class="weather-icon owf"></i>
    <div class="weather-error"></div>
    <div class="description-container">
      <span class="temperature"></span>
      <span class="weather-description"></span>
    </div>
    <div class="wind"></div>
    <div class="humidity"></div>
  </div>
`;

export const currencyConverter = () => `
  <div class="currency-converter">
    <h3 class="currency-converter__h3">Конвертер валют</h3>
    <p class="currency-converter__p">По курсу НБ РБ</p>
    <div class="currency-converter__inputs">
      <div class="currency-converter__input">
        <label>BYN
          <input class="converter-input input-byn" type="number">
        </label>
        <span class="currency-converter__span">белорусский рубль</span>
      </div>
      <div class="currency-converter__input">
        <label>USD
          <input class="converter-input input-usd" type="number">
        </label>
        <span class="currency-converter__span">доллар США</span>
      </div>
      <div class="currency-converter__input">
        <label>EUR
          <input class="converter-input input-eur" type="number">
        </label>
        <span class="currency-converter__span">евро</span>
      </div>
      <div class="currency-converter__input">
        <label>RUB
          <input class="converter-input input-rub" type="number">
        </label>
        <span class="currency-converter__span">российский рубль</span>
      </div>
      <div class="currency-converter__input">
        <label>UAH
          <input class="converter-input input-uah" type="number">
        </label>
        <span class="currency-converter__span">украинская гривна</span>
      </div>
      <div class="currency-converter__input">
        <label>PLN
          <input class="converter-input input-pln" type="number">
        </label>
        <span class="currency-converter__span">польский злотый</span>
      </div>
    </div>
  </div>
`;

export const aside = (weather: string, converter: string) => `
  <aside class="aside">
    ${weather}
    ${converter}
  </aside>
`;
const main = document.querySelector('.main-page') as HTMLDivElement;
main.insertAdjacentHTML('beforeend', aside(wether(), currencyConverter()));
