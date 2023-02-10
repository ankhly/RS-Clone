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
        <p class="gallery-block-name name1">Колонны</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-horizontalBar">
        <img class="gallery-block-img create-horizontalBar" src=${horizontalBar} alt="horizontalBar">
        <p class="gallery-block-name name3">Полосы</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-line">
        <img class="gallery-block-img create-line" src=${line} alt="line">
        <p class="gallery-block-name name4">Линии</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-radar">
        <img class="gallery-block-img create-radar" src=${radar} alt="radar">
        <p class="gallery-block-name name6">Радар</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-pie">
        <img class="gallery-block-img create-pie" src=${pie} alt="pie">
        <p class="gallery-block-name name5">Пирог</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-doughnut">
        <img class="gallery-block-img create-doughnut" src=${doughnut} alt="doughnut">
        <p class="gallery-block-name name2">Пончик</p>
      </div>
    </div>
  </div>
`;

export const galleryPage = (): string => `
  <div class="page__gallery gallery-page">
    <h1 class="gallery-page__h1 main-title">Галерея графиков/диаграмм</h1>
    <p class="gallery-page__text">Выберите необходимый вид графика/диаграммы, далее вы перейдёте в режим
      онлайн-конструктора, в котором сможете заполнить данные графика, и затем
      скачать или сохранить вашу диаграмму. Какую диаграмму вам необходимо построить?
      Линейную, круговую, столбчатую, полосовую, линии, области, …?
    </p>
   ${galleryBlock()}
  </div>
`;

