const weather = (): string => `
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

const currencyConverter = (): string => `
  <div class="currency-converter">
    <h3 class="currency-converter__h3">Конвертер валют</h3>
    <p class="currency-converter__p">По курсу НБ РБ</p>
    <div class="currency-converter__inputs">
      <div class="currency-converter__input">
        <label>BYN
          <input class="converter-input input-byn" type="number">
        </label>
        <span class="currency-converter__span span-byn">белорусский рубль</span>
      </div>
      <div class="currency-converter__input">
        <label>USD
          <input class="converter-input input-usd" type="number">
        </label>
        <span class="currency-converter__span span-usd">доллар США</span>
      </div>
      <div class="currency-converter__input">
        <label>EUR
          <input class="converter-input input-eur" type="number">
        </label>
        <span class="currency-converter__span span-eur">евро</span>
      </div>
      <div class="currency-converter__input">
        <label>RUB
          <input class="converter-input input-rub" type="number">
        </label>
        <span class="currency-converter__span span-rub">российский рубль</span>
      </div>
      <div class="currency-converter__input">
        <label>UAH
          <input class="converter-input input-uah" type="number">
        </label>
        <span class="currency-converter__span span-uah">украинская гривна</span>
      </div>
      <div class="currency-converter__input">
        <label>PLN
          <input class="converter-input input-pln" type="number">
        </label>
        <span class="currency-converter__span span-pln">польский злотый</span>
      </div>
    </div>
  </div>
`;

export const aside = (): string => `
  <aside class="aside">
    ${weather()}
    ${currencyConverter()}
  </aside>
`;
