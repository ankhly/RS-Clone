import { chartParametersState } from '../../store/store';

const renderRowsX = (): string => {
  let rowsX = '';
  for (let i = 0; i < chartParametersState.data.labels.length; i++) {
    rowsX += `
      <div class="deleteRowContainer">
        <div title="Удалить эту строку" class="closeX remove-row" data-id="${i}"></div>
        <input
          class="inputData inputDataLabel edit-labels-row"
          type="text"
          value="${chartParametersState.data.labels[i]}"
        />
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
        class="inputData inputDataNumbers edit-data-column-${index}"
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
        <input
          class="inputData inputDataLabel margin edit-labels-column"
          type="text"
          value="${chartParametersState.data.datasets[i].label}"
        />
        ${renderRowsY(i)}
      </div>
    `;
  }
  return columnsY;
};

export const renderMainParameters = (): string => `
  <div class="chartSettings">
    <p class="miniTitle tableData"></p>
    <div class="dataForm"></div>
  </div>
`;

export const renderMainParametersInner = (): void => {
  const dataForm = document.querySelector('.dataForm') as HTMLDivElement;
  dataForm.innerHTML = `
    <div class="formContainer">
      <p class="axis">X</p>
      <input
        class="inputData inputDataLabel margin title-chart"
        type="text"
        value="${chartParametersState.options.title.text}"
      />
      ${renderRowsX()}
      <button class="addButton add-row row"></button>
    </div>
    <div class="formContainer">
      <div class="flexContainer">
        ${renderColumnsY()}
      </div>
      <button class="addButton add-column col"></button>
    </div>
  `;
};
