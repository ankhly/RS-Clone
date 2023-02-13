import { renderMainParameters } from '../parametersChartMain/parametersChartMain';
import { renderAdditionalParameters } from '../parametersChartAdditional/parametersChartAdditional';

export const renderAllParameters = (): string => `
  <div class="optionsChartContainer">
    <h3 class="miniTitle settingsChart"></h3>
    ${renderMainParameters()}
    ${renderAdditionalParameters()}
  </div>
`;
