const mainPage = () => `
  <div class="wrapper">
  <main class="page">
    <div class="page__container container">
      <div class="page__main main-page">
        <section class="main-page__start">
          <div class="main-page__animation"></div>
          <h1 class="main-page__h1">EasyCharts</h1>
          <h2 class="main-page__h2">Графики/диаграммы онлайн</h2>              
          <button class="main-page__button info-page__button">
            <a class="main-page__button-link info-page__button-link" href="#">создать график</a>
          </button>
          <div class="main-page__images">
            <div class="img-block">
              <img class="main-page__img" src="../assetsStatic/phone.svg" alt="phone">
              <p><b>Создайте онлайн, бесплатно</b> и без регистрации</p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src="../assetsStatic/share.svg" alt="share">
              <p><b>Делитесь</b> ссылками на ваши графики</p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src="../assetsStatic/download.svg" alt="download">
              <p><b>Скачивайте графики</b>
                PNG / JPG / GIF / SVG
              </p>
            </div>
          </div>                       
        </section>
        <section class="main-page__galery">
          <h2 class="main-page__galery-h2">Галерея графиков/диаграмм</h2>
          <div class="main-page__galery-blocks">
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/bar.png" alt="bar">
              <p class="galery-block-name">Колонны</p>
            </div>
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/doughnut.png" alt="doughnut">
              <p class="galery-block-name">Пончик</p>
            </div>
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/horizontalBar.png" alt="horizontalBar">
              <p class="galery-block-name">Полосы</p>
            </div>
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/line.png" alt="line">
              <p class="galery-block-name">Линии</p>
            </div>
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/pie.png" alt="pie">
              <p class="galery-block-name">Пирог</p>
            </div>
            <div class="galery-block">
              <img class="galery-block-img" src="../assetsStatic/radar.png" alt="radar">
              <p class="galery-block-name">Радар</p>
            </div>
          </div>
        </section>
        <section class="main-page__example"></section>
        <section class="main-page__text">
          <p><b>EasyCharts</b> - сайт для построения графиков/диаграмм онлайн. Выберите вид диаграммы 
            (линейная, круговая, столбчатая, полосовая, линии, области), заполните данные таблицы 
            графика, и диаграмма готова! Диаграмму можно скачать в удобном вам формате или получить
            ссылку на страницу вашего графика. Вы можете также использовать онлайн-конструктор графиков 
            на нашем сайте, чтобы скачать график (png/jpeg/и др.) и вставить его в excel, word и другие 
            программы на вашем компьютере. Построить диаграмму онлайн очень просто! Читайте подробнее о том, 
            как создать диаграмму онлайн здесь. Также вы можете посмотреть примеры диаграмм, чтобы на их основе 
            создать необходимый вам график.
          </p>
        </section>            
      </div>
    </div>
  </main>
  </div>
`;
mainPage();
document.body.insertAdjacentHTML('afterbegin', mainPage());