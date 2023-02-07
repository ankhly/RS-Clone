const examplePage = () => `
  <div class="page__example example-page">
  <h1 class="example-page__h1 h1">Примеры графиков/диаграмм</h1>
  <p class="example-page__p gallery-page__text">
    На данной странице вы можете найти подходящие вам примеры графиков/диаграмм, чтобы 
    использовать их для построения своего графика, а также для того, чтобы понять как 
    работает конструктор графиков на нашем сайте. Также вы можете выбрать необходимый вид 
    диаграммы, чтобы посмотреть примеры для данного вида: круговая диаграмма, линейная, 
    столбчатая, полосовая, линии, области и другие.
  </p>
  <div class="example-page__examles"></div>    
  </div>
`;
document.body.insertAdjacentHTML('afterbegin', examplePage());
