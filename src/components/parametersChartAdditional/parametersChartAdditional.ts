import { chartParametersState } from '../../store/store';

export const renderAdditionalParameters = (): string => `
  <div class="chartViewAndSave">
    <p class="miniTitle optionChart"></p>
    <div class="params-container"></div>
    <div class="save-container">
      <button class="save download-PNG"></button>
      <button class="save download-JPG"></button>
    </div>
    <button class="share copi-link"></button>
    <button class="reset"></button>
  </div>
`;

export const renderAdditionalParametersInner = (): void => {
  const paramsContainer = document.querySelector('.params-container') as HTMLDivElement;
  paramsContainer.innerHTML = `
    <div class="params">
      <label class="labelSettingsForm width" for="width"></label>
      <input type="text" id="edit-width" value="${chartParametersState.width}"/>
    </div>
    <div class="params">
      <label class="labelSettingsForm height" for="height"></label>
      <input type="text" id="edit-height" value="${chartParametersState.height}"/>
    </div>
    <div class="params">
      <label class="labelSettingsForm color" for="color"></label>
      <input type="color" id="edit-color"/>
    </div>
  `;
};
