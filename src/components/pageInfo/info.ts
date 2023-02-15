import bar from '../../../assets/bar.png';
import horizontalBar from '../../../assets/horizontalBar.png';
import line from '../../../assets/line.png';
import radar from '../../../assets/radar.png';
import pie from '../../../assets/pie.png';
import doughnut from '../../../assets/doughnut.png';

export const infoPage = (): string => `
  <div class="page__body">
    <div class="info-page">
    <div class="main-page__animation" style="display: none"></div>
      <div class="info-page__head">
        <div class="info-page__icon"></div>
      </div>
      <div class="info-page__titles">
        <h1 class="info-page__h1 main-title"></h1>
        <p class="info-page__text info-page__text1"></p>
        <p class="info-page__text info-page__text2"></p>
      </div>
      <div class="info-page__section section-view">
        <h2 class="section__h2 section-view__h2">1.</h2>
        <p class="section__text section-view__text"></p>
        <div class="section-view__images">
          <div class="section-view__link create-bar">
            <img class="section-view__img create-bar" src=${bar} alt="bar">
          </div>
          <div class="section-view__link create-horizontalBar">
            <img class="section-view__img create-horizontalBar" src=${horizontalBar} alt="horizontalBar">
          </div>
          <div class="section-view__link create-line">
            <img class="section-view__img create-line" src=${line} alt="line">
          </div>
          <div class="section-view__link create-radar">
            <img class="section-view__img create-radar" src=${radar} alt="radar">
          </div>
          <div class="section-view__link create-pie">
            <img class="section-view__img create-pie" src=${pie} alt="pie">
          </div>
          <div class="section-view__link create-doughnut">
            <img class="section-view__img create-doughnut" src=${doughnut} alt="doughnut">
          </div>
        </div>
      </div>
      <div class="info-page__section section-tables">
        <h2 class="section__h2 section-tables__h2">2.</h2>
        <p class="section__text section-tables__text"></p>
        <div class="info-examples" id="main-logic-container"></div>
      </div>
      <div class="info-page__section section-ready">
        <h2 class="section__h2 section-ready__h2">3.</h2>
        <p class="section__text section-ready__text"></p>
      </div>
      <button class="info-page__button create-chart-button"></button>
    </div>
  </div>
`;
