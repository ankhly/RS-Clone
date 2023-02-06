import './style.scss';

import { renderTypesChart } from './Max/components/typesChart/typesChart';
import { renderLoaderOrChart, renderViewChart } from './Max/components/viewChart/viewChart';
import { renderAllParameters } from './Max/components/parametersChartAll/parametersChartAll';
import { renderMainParametersInner } from './Max/components/parametersChartMain/parametersChartMain';
import { renderAdditionalParametersInner } from './Max/components/parametersChartAdditional/parametersChartAdditional';
import { listeners, listenersAdditionalInput, listenersMainInput } from './Max/logic/listeners';

const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

mainLogicContainer.innerHTML = `
  ${renderTypesChart()}
  ${renderViewChart()}
  ${renderAllParameters()}
`;

renderMainParametersInner();
renderAdditionalParametersInner();
await renderLoaderOrChart();
listeners();
listenersMainInput();
listenersAdditionalInput();
