import { chartParametersState } from '../../services/store';

const renderRowsX = (): string => {
  let rowsX = '';
  for (let i = 0; i < chartParametersState.data.labels.length; i++) {
    rowsX += `
      <div class="deleteRowContainer">
        <div title="Удалить эту строку" class="closeX remove-row" data-id="${i}"></div>
        <input class="inputData inputDataLabel" type="text" value="${chartParametersState.data.labels[i]}"/>
      </div>
    `;
  }
  return rowsX;
};

const renderRowsY = (index: number): string => {
  let rowsY = '';
  for (let i = 0; i < chartParametersState.data.datasets[index].data.length; i++) {
    rowsY += `
      <input
        class="inputData inputDataNumbers"
        type="text"
        value="${chartParametersState.data.datasets[index].data[i]}"
      />
    `;
  }
  return rowsY;
};

const renderColumnsY = (): string => {
  let columnsY = '';
  for (let i = 0; i < chartParametersState.data.datasets.length; i++) {
    columnsY += `
      <div class="formContainerInner">
        <p class="axis">Y${i + 1}</p>
        <div title="Удалить этот столбец" class="closeY remove-column" data-id="${i}"></div>
        <input class="inputData inputDataLabel margin" value="${chartParametersState.data.datasets[i].label}"/>
        ${renderRowsY(i)}
      </div>
    `;
  }
  return columnsY;
};

export const renderMainParameters = (): string => `
  <div class="chartSettings">
    <p class="miniTitle">Таблица данных</p>
    <div class="dataForm"></div>
  </div>
`;

export const renderMainParametersInner = (): void => {
  const dataForm = document.querySelector('.dataForm') as HTMLDivElement;
  dataForm.innerHTML = `
  <div class="formContainer">
    <p class="axis">X</p>
    <input type="text" value="${chartParametersState.options.title.text}" class="inputData inputDataLabel margin"/>
    ${renderRowsX()}
    <button class="addButton add-row"> Добавить строку</button>
  </div>
  <div class="formContainer">
    <div class="flexContainer">
      ${renderColumnsY()}
    </div>
    <button class="addButton add-column">Добавить столбец</button>
  </div>
  `;
};

const renderAdditionalParameters = (): string => `
  <div class="chartViewAndSave">
    <p class="miniTitle">Параметры графика</p>
    <div class="params">
      <label class="labelSettingsForm" for="width">Ширина:</label>
      <input type="text" id="width" value="${chartParametersState.width}"/>
    </div>
    <div class="params">
      <label class=labelSettingsForm for="height">Высота:</label>
      <input type="text" id="height" value="${chartParametersState.height}"/>
    </div>
    <div class="params">
       <label class=labelSettingsForm for="color">Цвет фона:</label>
      <input type="color" id="color" value=""/>
    </div>
    <a class="link">Скачать график PNG</a>
    <a class="link">Скачать график JPG</a>
    <a class="link">Скачать график PDF</a>
  </div>
`;

export const renderAllParameters = (): string => `
  <div class="optionsChartContainer">
    <h3 class="miniTitle">Настройки графика</h3>
    ${renderMainParameters()}
    ${renderAdditionalParameters()}
  </div>
`;
