import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
  setDataColumn,
  setLabelsColumn,
  setLabelsRow, setTitle,
  setType,
} from './setParametersChart';
import { renderLoaderOrChart } from '../viewChart/viewChart';
import { renderMainParametersInner } from '../selectParametersChart/parametersChart';

export const listenersInput = () => {
  const editLabelsRow = document.querySelectorAll('.edit-labels-row') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < editLabelsRow.length; i++) {
    editLabelsRow[i].addEventListener('input', async (event) => {
      setLabelsRow(i, (event.target as HTMLInputElement).value);
      await renderLoaderOrChart();
    });
  }

  const editLabelsColumn = document.querySelectorAll('.edit-labels-column') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < editLabelsColumn.length; i++) {
    editLabelsColumn[i].addEventListener('input', async (event) => {
      setLabelsColumn(i, (event.target as HTMLInputElement).value);
      await renderLoaderOrChart();
    });

    const editDataColumn = document.querySelectorAll(`.edit-data-column-${i}`) as NodeListOf<HTMLInputElement>;
    for (let j = 0; j < editDataColumn.length; j++) {
      editDataColumn[j].addEventListener('input',  async (event) => {
        setDataColumn(j, (event.target as HTMLInputElement).value, i);
        await renderLoaderOrChart();
      });
    }
  }

  const titleChart = document.querySelector('.title-chart') as HTMLInputElement;
  titleChart.addEventListener('input', async (event) => {
    setTitle((event.target as HTMLInputElement).value);
    await renderLoaderOrChart();
  });
};

export const listeners = (): void => {
  const body = document.querySelector('#body') as HTMLElement;

  body.addEventListener('click', async (event: MouseEvent) => {
    const selectTypeButton = (event.target as HTMLElement).closest('.imageContainer');

    const addRemoveButton = event.target as HTMLElement;
    if (addRemoveButton.classList.contains('remove-row')) {
      removeRow(addRemoveButton.dataset.id!);
      // if (chartParametersState.data.labels.length !== 1) {
        renderMainParametersInner();
        listenersInput();
        await renderLoaderOrChart();
      // }
    }
    if (addRemoveButton.classList.contains('remove-column')) {
      removeColumn(addRemoveButton.dataset.id!);
      // if (chartParametersState.data.datasets.length !== 1) {
        renderMainParametersInner();
        listenersInput();
        await renderLoaderOrChart();
      // }
    }
    if (addRemoveButton.classList.contains('add-row')) {
      addRow();
      renderMainParametersInner();
      listenersInput();
      await renderLoaderOrChart();
    }
    if (addRemoveButton.classList.contains('add-column')) {
      addColumn();
      renderMainParametersInner();
      listenersInput();
      await renderLoaderOrChart();
    }

    if (!selectTypeButton) {
      return;
    }
    if (selectTypeButton.classList.contains('type-bar')) {
      setType('bar');
      await renderLoaderOrChart();
    }
    if (selectTypeButton.classList.contains('type-horizontalBar')) {
      setType('horizontalBar');
      await renderLoaderOrChart();
    }
    if (selectTypeButton.classList.contains('type-line')) {
      setType('line');
      await renderLoaderOrChart();
    }
    if (selectTypeButton.classList.contains('type-radar')) {
      setType('radar');
      await renderLoaderOrChart();
    }
    if (selectTypeButton.classList.contains('type-pie')) {
      setType('pie');
      await renderLoaderOrChart();
    }
    if (selectTypeButton.classList.contains('type-doughnut')) {
      setType('doughnut');
      await renderLoaderOrChart();
    }
  });
};
