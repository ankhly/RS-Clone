const infoPage = () => `
  <div class="wrapper">
  <main class="page">
    <div class="page__container container">
      <div class="page__body">
        <div class="info-page">
          <div class="info-page__head">
            <div class="info-page__icon"></div>
          </div>
          <div class="info-page__titles">
            <h1 class="info-page__h1 h1">Как создать график/диаграмму онлайн на сайте
              <br><b>EasyCharts</b>
            </h1>
            <p class="info-page__text info-page__text1">
            Вы можете посмотреть примеры графиков/диаграмм и создать свой график из подходящего вам примера.
            </p>
            <p class="info-page__text info-page__text2">
              Ниже описана полная инструкция, <b>как создать диаграмму</b> на нашем сайте. Это просто:
            </p>
          </div>
          <div class="info-page__section section-view">
            <h2 class="section__h2 section-view__h2">1. Выберите вид графика</h2>        
            <p class="section__text section-view__text">
              На странице <a class="section__text-link" href="#">создания</a> или в галерее выберите
              подходящий вам тип графика.
              <br>Как вам необходимо отобразить ваши данные?
              <br>Линии / области / колонны / круговая диаграмма / … ?
            </p>
            <div class="section-view__images">
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/bar.png" alt="bar">
              </a>
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/doughnut.png" alt="doughnut">
              </a>
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/horizontalBar.png" alt="horizontalBar">
              </a>
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/line.png" alt="line">
              </a>
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/pie.png" alt="pie">
              </a>
              <a class="section-view__link" href="#">
                <img class="section-view__img" src="../assetsStatic/radar.png" alt="radar">
              </a>
            </div>            
          </div>
          <div class="info-page__section section-tables">
            <h2 class="section__h2 section-tables__h2">2. Заполните таблицу данных</h2>
            <p class="section__text section-tables__text">
              Для того, чтобы построить диаграмму, необходимо заполнить таблицу данных.
              <br>Значения в <b>первой колонке</b> станут отметками по горизонтали (по оси X).
              <br><b>Остальные колонки</b> (их может быть одна или несколько) – это значения,
              <br>которые соответствуют отметкам из первой колонки, и которые будут отображены на диаграмме (ось Y).
            </p>
          </div>
          <div class="info-page__section section-ready">
            <h2 class="section__h2 section-ready__h2">3. Готово!</h2>
            <p class="section__text section-ready__text">
              Теперь график можно <b>скачать</b> в удобном вам формате или <b>поделиться ссылкой</b> на вашу диаграмму.
            </p>
          </div>
          <button class="info-page__button">
            <a class="info-page__button-link" href="#">создать график</a>
          </button>
        </div>
      </div>
    </div>
  </main>
  </div>
`;
