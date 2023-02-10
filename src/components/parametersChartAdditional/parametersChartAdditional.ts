import { chartParametersState } from '../../store/store';

export const renderAdditionalParameters = (): string => `
  <div class="chartViewAndSave">
    <p class="miniTitle">Параметры графика</p>
    <div class="params-container"></div>
    <div class="save-container">
      <button class="save download-PNG">Скачать график PNG</button>
      <button class="save download-JPG">Скачать график JPG</button>
    </div>
    <button class="reset">Сбросить график</button>
  </div>
`;

export const renderAdditionalParametersInner = (): void => {
  const paramsContainer = document.querySelector('.params-container') as HTMLDivElement;
  paramsContainer.innerHTML = `
    <div class="params">
      <label class="labelSettingsForm" for="width">Ширина:</label>
      <input type="text" id="edit-width" value="${chartParametersState.width}"/>
    </div>
    <div class="params">
      <label class=labelSettingsForm for="height">Высота:</label>
      <input type="text" id="edit-height" value="${chartParametersState.height}"/>
    </div>
    <div class="params">
      <label class=labelSettingsForm for="color">Цвет фона:</label>
      <input type="color" id="edit-color"/>
    </div>
  `;
};
