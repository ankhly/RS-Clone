export const galleryBlock = () => `
  <div class="gallery-page__gallery-blocks">
    <div class="gallery-block__link">
      <div class="gallery-block gallery-block-main create-bar">
        <img class="gallery-block-img create-bar" src="../assetsStatic/bar.png" alt="bar">
        <p class="gallery-block-name gallery-block-name1">Колонны</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-horizontalBar">
        <img class="gallery-block-img create-horizontalBar" src="../assetsStatic/horizontalBar.png" alt="horizontalBar">
        <p class="gallery-block-name gallery-block-name3">Полосы</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-line">
        <img class="gallery-block-img create-line" src="../assetsStatic/line.png" alt="line">
        <p class="gallery-block-name gallery-block-name4">Линии</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-radar">
        <img class="gallery-block-img create-radar" src="../assetsStatic/radar.png" alt="radar">
        <p class="gallery-block-name gallery-block-name6">Радар</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-pie">
        <img class="gallery-block-img create-pie" src="../assetsStatic/pie.png" alt="pie">
        <p class="gallery-block-name gallery-block-name5">Пирог</p>
      </div>
    </div>
    <div class="gallery-block__link">
      <div class="gallery-block create-doughnut">
        <img class="gallery-block-img create-doughnut" src="../assetsStatic/doughnut.png" alt="doughnut">
        <p class="gallery-block-name gallery-block-name2">Пончик</p>
      </div>
    </div>
  </div>
`;

export const galleryPage = () => `
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

