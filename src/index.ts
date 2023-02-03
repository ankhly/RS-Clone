import './style.scss';
import { chartParametersState } from './Max/services/store';
import { getAddress } from './Max/services/api';
import { renderTypesChart } from './Max/components/selectTypesChart/typesChart';
import {renderChart, renderLoader, renderViewChart} from './Max/components/viewChart/viewChart';
import { renderAllParameters, renderMainParametersInner } from './Max/components/selectParametersChart/parametersChart';
import { listeners } from './Max/components/logic/listeners';

const mainLogicContainer = document.querySelector('#main-logic-container') as HTMLDivElement;

mainLogicContainer.innerHTML = `
  ${renderTypesChart()}
  ${renderViewChart()}
  ${renderAllParameters()}
`;

const str = await getAddress(chartParametersState);

renderLoader();
renderChart(str);
renderMainParametersInner();
listeners();
