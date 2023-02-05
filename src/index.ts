import './style.scss';

import { renderTypesChart } from './Max/components/selectTypesChart/typesChart';
import { renderLoaderOrChart, renderViewChart } from './Max/components/viewChart/viewChart';
import { renderAllParameters, renderMainParametersInner } from './Max/components/selectParametersChart/parametersChart';
import { listeners, listenersInput } from './Max/components/logic/listeners';

const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

mainLogicContainer.innerHTML = `
  ${renderTypesChart()}
  ${renderViewChart()}
  ${renderAllParameters()}
`;

renderMainParametersInner();
await renderLoaderOrChart();
listeners();
listenersInput();
