import { galleryBlock } from '../pageGallery/gallery';
import { aside } from '../aside/aside';
import phone from '../../../assets/phone.svg';
import share from '../../../assets/share.svg';
import download from '../../../assets/download.svg';

export const mainPage = (): string => `
  <div class="page__main main-page">
    <div class="main-page__sections">
      <div class="main-page__animation"></div>
      <section class="main-page__start">
        <div class="main-page__start-wrap">
          <h1 class="main-page__h1 main-title">EasyCharts</h1>
          <h2 class="main-page__h2"></h2>
          <button class="main-page__button info-page__button create-chart-button"></button>
          <div class="main-page__images">
            <div class="img-block">
              <img class="main-page__img" src=${phone} alt="phone">
              <p class="img-block__text1"</p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src=${share} alt="share">
              <p class="img-block__text2"></p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src=${download} alt="download">
              <p class="img-block__text3"></p>
            </div>
          </div>
        </div>
        ${aside()}
      </section>
      <section class="main-page__gallery">
        <h2 class="main-page__gallery-h2"></h2>
        ${galleryBlock()}
      </section>
      <section class="main-page__example" id="main-logic-container"></section>
      <section class="main-page__text">
        <p class="main-page__text-p"></p>
      </section>
      <div class="mobile-aside">
      </div>
    </div>
  </div>
`;
