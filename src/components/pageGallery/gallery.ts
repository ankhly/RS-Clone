import bar from '../../../assets/bar.png';
import horizontalBar from '../../../assets/horizontalBar.png';
import line from '../../../assets/line.png';
import radar from '../../../assets/radar.png';
import pie from '../../../assets/pie.png';
import doughnut from '../../../assets/doughnut.png';

export const galleryBlock = (): string => `
  <div class="gallery-page__gallery-blocks">
  <div class="main-page__animation" style="display: none"></div>
    <div class="gallery-block__link">
      <div class="gallery-block gallery-block-main create-bar">
        <img class="gallery-block-img create-bar" src=${bar} alt="bar">
        <p class="gallery-block-name name-diagram1"></p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-horizontalBar">
        <img class="gallery-block-img create-horizontalBar" src=${horizontalBar} alt="horizontalBar">
        <p class="gallery-block-name name-diagram3"></p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-line">
        <img class="gallery-block-img create-line" src=${line} alt="line">
        <p class="gallery-block-name name-diagram4"></p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-radar">
        <img class="gallery-block-img create-radar" src=${radar} alt="radar">
        <p class="gallery-block-name name-diagram6"></p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-pie">
        <img class="gallery-block-img create-pie" src=${pie} alt="pie">
        <p class="gallery-block-name name-diagram5"></p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-doughnut">
        <img class="gallery-block-img create-doughnut" src=${doughnut} alt="doughnut">
        <p class="gallery-block-name name-diagram2"></p>
      </div>
    </div>
  </div>
`;

export const galleryPage = (): string => `
  <div class="page__gallery gallery-page">
    <h1 class="gallery-page__h1 main-title"></h1>
    <p class="gallery-page__text">
    </p>
    ${galleryBlock()}
  </div>
`;
