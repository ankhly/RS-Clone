export const galleryBlock = () => `
  <div class="gallery-page__gallery-blocks">
    <a class="gallery-block__link" href="#">
      <div class="gallery-block gallery-block-main">
        <img class="gallery-block-img" src="../assetsStatic/bar.png" alt="bar">
        <p class="gallery-block-name gallery-block-name1">Колонны</p>
      </div>
    </a>
    <a class="gallery-block__link" href="#">
      <div class="gallery-block">
        <img class="gallery-block-img" src="../assetsStatic/doughnut.png" alt="doughnut">
        <p class="gallery-block-name gallery-block-name2">Пончик</p>
      </div>
    </a>
    <a class="gallery-block__link" href="#">
      <div class="gallery-block">
        <img class="gallery-block-img" src="../assetsStatic/horizontalBar.png" alt="horizontalBar">
        <p class="gallery-block-name gallery-block-name3">Полосы</p>
      </div>
    </a>
    <a class="gallery-block__link" href="#">
      <div class="gallery-block">
        <img class="gallery-block-img" src="../assetsStatic/line.png" alt="line">
        <p class="gallery-block-name gallery-block-name4">Линии</p>
      </div>
    </a>
    <a class="gallery-block__link" href="#">
      <div class="gallery-block">
        <img class="gallery-block-img" src="../assetsStatic/pie.png" alt="pie">
        <p class="gallery-block-name gallery-block-name5">Пирог</p>
      </div>
    </a>
    <a class="gallery-block__link" href="#">
      <div class="gallery-block">
        <img class="gallery-block-img" src="../assetsStatic/radar.png" alt="radar">
        <p class="gallery-block-name gallery-block-name6">Радар</p>
      </div>
    </a>
  </div>
`;

const galleryPage = (block: string) => `
  <div class="wrapper">
    <main class="page">
      <div class="page__container container">
        <div class="page__gallery gallery-page">
          <h1 class="gallery-page__h1 h1">Галерея графиков/диаграмм</h1>
          <p class="gallery-page__text">Выберите необходимый вид графика/диаграммы, далее вы перейдёте в режим 
            онлайн-конструктора, в котором сможете заполнить данные графика, и затем 
            скачать или сохранить вашу диаграмму. Какую диаграмму вам необходимо построить? 
            Линейную, круговую, столбчатую, полосовую, линии, области, …?
          </p>
          ${block}  
        </div>
      </div>
    </main>
  </div>  
`;
