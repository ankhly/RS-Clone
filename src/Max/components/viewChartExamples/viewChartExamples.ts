import { getAddress } from '../../services/api';
import { renderLoaderExamples } from '../loader/loader';
import { exampleValueFirst } from '../../services/exampleValueFirst';
import { exampleValueSecond } from '../../services/exampleValueSecond';
import { exampleValueThird } from '../../services/exampleValueThird';

export const renderViewExamples = (): string => {
  return `
    <div class="chartResult">
      <h3 class="miniTitle">График</h3>
      <div class="imageContainer" id="imageContainer-1"></div>
      <div class="imageContainer" id="imageContainer-2"></div>
      <div class="imageContainer" id="imageContainer-3"></div>
    </div>
  `;
};

const renderExamples = (address: string, imageContainer: HTMLDivElement): void => {
  const imgChart = new Image();
  imgChart.src = address;
  imgChart.addEventListener('load', ():void => {
    imageContainer.innerHTML = '';
    imageContainer.append(imgChart);
  });
};

export const renderLoaderOrExamples = async () => {
  renderLoaderExamples();

  const addressExample1 = await getAddress(exampleValueFirst);
  const imageContainer1 = document.querySelector('#imageContainer-1') as HTMLDivElement;
  renderExamples(addressExample1, imageContainer1);

  const addressExample2 = await getAddress(exampleValueSecond);
  const imageContainer2 = document.querySelector('#imageContainer-2') as HTMLDivElement;
  renderExamples(addressExample2, imageContainer2);

  const addressExample3 = await getAddress(exampleValueThird);
  const imageContainer3 = document.querySelector('#imageContainer-3') as HTMLDivElement;
  renderExamples(addressExample3, imageContainer3);
};
