import { getAddress } from '../../services/api';
import { loader } from '../loader/loader';
import { chartParametersState } from '../../services/store';

export const renderViewChart = (): string => {
  return  `
    <div class="chartResult">
      <h3 class="miniTitle">График</h3>
      <div class="imageContainer" id="imageContainer"></div>
    </div>
  `;
};

const renderLoader = (): void => {
  const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;
  imageContainer.innerHTML = `${loader()}`;
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

export const renderLoaderOrChart = async () => {
  renderLoader();
  const address = await getAddress(chartParametersState);
  renderChart(address);
};
