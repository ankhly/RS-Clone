import './style.scss';

import { renderTypesChart } from './Max/components/typesChart/typesChart';
import { renderLoaderOrChart, renderViewChart } from './Max/components/viewChart/viewChart';
import { renderAllParameters } from './Max/components/parametersChartAll/parametersChartAll';
import { renderMainParametersInner } from './Max/components/parametersChartMain/parametersChartMain';
import { renderAdditionalParametersInner } from './Max/components/parametersChartAdditional/parametersChartAdditional';
import { listeners, listenersAdditionalInput, listenersMainInput } from './Max/logic/listeners';
import { globalState } from './Max/services/store';
import { renderLoaderOrExamples, renderViewExamples } from './Max/components/viewChartExamples/viewChartExamples';
import { ViewPage } from './Max/types';

export const showPage1 = async () => {
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
};

export const showPage2 = async () => {
  const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

  mainLogicContainer.innerHTML = `
    ${renderTypesChart()}
    ${renderViewExamples()}
  `;

  await renderLoaderOrExamples();
};

if (globalState.view === ViewPage.create) {
  await showPage1();
}
if (globalState.view === ViewPage.examples) {
  await showPage2();
}

listeners();
