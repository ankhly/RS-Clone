import { addColumn, addRow, removeColumn, removeRow, setType } from './setParametersChart';
import { getAddress } from '../../services/api';
import { renderChart, renderLoader } from '../viewChart/viewChart';
import { renderMainParametersInner } from '../selectParametersChart/parametersChart';
import { chartParametersState } from '../../services/store';

const rerenderNewChartByClick = async () => {
  renderLoader();
  const address = await getAddress(chartParametersState);
  renderChart(address);
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
        await rerenderNewChartByClick();
      // }
    }
    if (addRemoveButton.classList.contains('remove-column')) {
      removeColumn(addRemoveButton.dataset.id!);
      // if (chartParametersState.data.datasets.length !== 1) {
        renderMainParametersInner();
        await rerenderNewChartByClick();
      // }
    }
    if (addRemoveButton.classList.contains('add-row')) {
      addRow();
      renderMainParametersInner();
      await rerenderNewChartByClick();
    }
    if (addRemoveButton.classList.contains('add-column')) {
      addColumn();
      renderMainParametersInner();
      await rerenderNewChartByClick();
    }

    if (!selectTypeButton) {
      return;
    }
    if (selectTypeButton.classList.contains('type-bar')) {
      setType('bar');
      await rerenderNewChartByClick();
    }
    if (selectTypeButton.classList.contains('type-horizontalBar')) {
      setType('horizontalBar');
      await rerenderNewChartByClick();
    }
    if (selectTypeButton.classList.contains('type-line')) {
      setType('line');
      await rerenderNewChartByClick();
    }
    if (selectTypeButton.classList.contains('type-radar')) {
      setType('radar');
      await rerenderNewChartByClick();
    }
    if (selectTypeButton.classList.contains('type-pie')) {
      setType('pie');
      await rerenderNewChartByClick();
    }
    if (selectTypeButton.classList.contains('type-doughnut')) {
      setType('doughnut');
      await rerenderNewChartByClick();
    }
  });
};
