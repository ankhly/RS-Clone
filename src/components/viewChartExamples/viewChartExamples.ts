import { getAddress } from '../../services/API-chart';
import { renderLoaderExamples } from '../loader/loader';
import { exampleValueFirst } from '../../store/exampleValueFirst';
import { exampleValueSecond } from '../../store/exampleValueSecond';
import { exampleValueThird } from '../../store/exampleValueThird';
import { renderTableExample1, renderTableExample2, renderTableExample3 } from '../tables/tables';

export const renderViewExamples = (): string => {
  return `
    <div class="chartResult">
      <h3 class="miniTitle schedule">График</h3>
      <div class="imageContainer" id="imageContainer-1"></div>
      <button class="link edit-example-1">
        Отредактировать график:
        <span class="edit-example-1">
          ${exampleValueFirst.options.title.text.split(',').shift()}
        </span>
      </button>
      <div class="imageContainer" id="imageContainer-2"></div>
      <button class="link edit-example-2">
        Отредактировать график:
        <span class="edit-example-2">
          ${exampleValueSecond.options.title.text.split(',').shift()}
        </span>
      </button>
      <div class="imageContainer" id="imageContainer-3"></div>
      <button class="link edit-example-3">
        Отредактировать график:
        <span class="edit-example-3">
          ${exampleValueThird.options.title.text.split(',').shift()}
        </span>
      </button>
    </div>
  `;
};

export const renderViewExamplesInInfo = (): string => {
  return `
    <div class="imageContainerBlock">
      <div class="imageContainer" id="imageContainer-1"></div>
      ${renderTableExample1()}
      <button class="link edit-example-1">
        <span class="edit-example-1">
          ${exampleValueFirst.options.title.text.split(',').shift()}
        </span>
      </button>
    </div>
    <div class="imageContainerBlock">
      <div class="imageContainer" id="imageContainer-2"></div>
      ${renderTableExample2()}
      <button class="link edit-example-2">
        <span class="edit-example-2">
          ${exampleValueSecond.options.title.text.split(',').shift()}
        </span>
      </button>
    </div>
    <div class="imageContainerBlock">
      <div class="imageContainer" id="imageContainer-3"></div>
      ${renderTableExample3()}
      <button class="link edit-example-3">
        <span class="edit-example-3">
          ${exampleValueThird.options.title.text.split(',').shift()}
        </span>
      </button>
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

export const renderLoaderOrExamples = async (): Promise<void> => {
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
