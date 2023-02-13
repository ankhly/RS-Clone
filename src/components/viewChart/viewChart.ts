import { getAddress } from '../../services/API-chart';
import { chartParametersState } from '../../store/store';
import { renderLoader } from '../loader/loader';

export const renderViewChart = (): string => {
  return  `
    <div class="chartResult">
      <h3 class="miniTitle schedule"></h3>
      <div class="imageContainer" id="imageContainer"></div>
    </div>
  `;
};

const renderChart = (address: string): void => {
  const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;

  const imgChart = new Image();
  imgChart.src = address;
  imgChart.addEventListener('load', ():void => {
    imageContainer.innerHTML = '';
    imageContainer.append(imgChart);
  });
};

export const renderLoaderOrChart = async (): Promise<void> => {
  renderLoader();
  const address = await getAddress(chartParametersState);
  renderChart(address);
};
