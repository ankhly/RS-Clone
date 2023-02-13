import bar from '../../../assets/bar.png';
import horizontalBar from '../../../assets/horizontalBar.png';
import line from '../../../assets/line.png';
import radar from '../../../assets/radar.png';
import pie from '../../../assets/pie.png';
import doughnut from '../../../assets/doughnut.png';

export const renderTypesChart = (): string => `
  <div class="chartSelectionForm">
    <h3 class="miniTitle view">Вид</h3>
    <div class="chartsTypeContainer chartsTypeContainer">
      <div class="imageContainer type-bar image-container-active">
        <img src=${bar} alt="Колонны" />
        <p class="typeName name1"></p>
      </div>
      <div class="imageContainer type-horizontalBar">
        <img src=${horizontalBar} alt="Полосы" />
        <p class="typeName name3">Полосы</p>
      </div>
      <div class="imageContainer type-line">
        <img src=${line} alt="Линии" />
        <p class="typeName name4">Линии</p>
      </div>
      <div class="imageContainer type-radar">
        <img src=${radar} alt="Радар" />
        <p class="typeName name6">Радар</p>
      </div>
      <div class="imageContainer type-pie">
        <img src=${pie} alt="Пирог" />
        <p class="typeName name5">Пирог</p>
      </div>
      <div class="imageContainer type-doughnut">
        <img src=${doughnut} alt="Пончик" />
        <p class="typeName name2">Пончик</p>
      </div>
    </div>
  </div>
`;
