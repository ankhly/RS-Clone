import { renderTypesChart } from '../components/typesChart/typesChart';
import { renderLoaderOrChart, renderViewChart } from '../components/viewChart/viewChart';
import { renderAllParameters } from '../components/parametersChartAll/parametersChartAll';
import { renderMainParametersInner } from '../components/parametersChartMain/parametersChartMain';
import { renderAdditionalParametersInner } from '../components/parametersChartAdditional/parametersChartAdditional';
import { listenersAdditionalInput, listenersMainInput } from './listeners';
import { showActiveClassAfterRestart } from '../utils/helpers';
import {
  renderLoaderOrExamples,
  renderViewExamples,
  renderViewExamplesInInfo,
} from '../components/viewChartExamples/viewChartExamples';

export const showCreateBlock = async () => {
  const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

  mainLogicContainer.innerHTML = `
    ${renderTypesChart()}
    ${renderViewChart()}
    ${renderAllParameters()}
  `;

  renderMainParametersInner();
  renderAdditionalParametersInner();
  await renderLoaderOrChart();
  listenersMainInput();
  listenersAdditionalInput();

  showActiveClassAfterRestart();
};

export const showExamplesBlock = async () => {
  const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

  mainLogicContainer.innerHTML = `
    ${renderTypesChart()}
    ${renderViewExamples()}
  `;

  await renderLoaderOrExamples();

  showActiveClassAfterRestart();
};

export const showExamplesBlockInInfo = async () => {
  const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

  mainLogicContainer.innerHTML = `
    ${renderViewExamplesInInfo()}
  `;

  await renderLoaderOrExamples();
};