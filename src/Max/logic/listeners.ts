import {
  addColumn,
  addRow,
  removeColumn,
  removeRow,
  resetChart,
  setColor,
  setDataColumn,
  setHeight,
  setLabelsColumn,
  setLabelsRow, setState,
  setTitle,
  setType,
  setWidth,
} from './setParametersChart';
import { renderLoaderOrChart } from '../components/viewChart/viewChart';
import { renderMainParametersInner } from '../components/parametersChartMain/parametersChartMain';
import { renderAdditionalParametersInner } from '../components/parametersChartAdditional/parametersChartAdditional';
import { saveCharts, showActiveClass } from './helpers';
import { renderLoaderOrExamples } from '../components/viewChartExamples/viewChartExamples';
import { Extensions, LocalStorageKeys, TypeCharts, ViewPage } from '../types';
import { exampleValueFirst } from '../services/exampleValueFirst';
import { exampleValueSecond } from '../services/exampleValueSecond';
import { exampleValueThird } from '../services/exampleValueThird';
import { showPage1, showPage2 } from './showPages';

export const listenersMainInput = () => {
  const editLabelsRow = document.querySelectorAll('.edit-labels-row') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < editLabelsRow.length; i++) {
    editLabelsRow[i].addEventListener('input', async (event: Event) => {
      setLabelsRow(i, (event.target as HTMLInputElement).value);
      await renderLoaderOrChart();
    });
  }

  const editLabelsColumn = document.querySelectorAll('.edit-labels-column') as NodeListOf<HTMLInputElement>;
  for (let i = 0; i < editLabelsColumn.length; i++) {
    editLabelsColumn[i].addEventListener('input', async (event: Event) => {
      setLabelsColumn(i, (event.target as HTMLInputElement).value);
      await renderLoaderOrChart();
    });

    const editDataColumn = document.querySelectorAll(`.edit-data-column-${i}`) as NodeListOf<HTMLInputElement>;
    for (let j = 0; j < editDataColumn.length; j++) {
      editDataColumn[j].addEventListener('input',  async (event: Event) => {
        const correctlyValue = (event.target as HTMLInputElement).value.replace(/[^0-9.-]/g, '');
        (event.target as HTMLInputElement).value = correctlyValue;
        setDataColumn(j, correctlyValue, i);
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

export const listenersAdditionalInput = () => {
  const editWidth = document.querySelector('#edit-width') as HTMLInputElement;
  editWidth.addEventListener('input', async (event) => {
    const correctlyValue = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '');
    (event.target as HTMLInputElement).value = correctlyValue;
    setWidth(correctlyValue);
    await renderLoaderOrChart();
  });

  const editHeight = document.querySelector('#edit-height') as HTMLInputElement;
  editHeight.addEventListener('input', async (event) => {
    const correctlyValue = (event.target as HTMLInputElement).value.replace(/[^0-9]/g, '');
    (event.target as HTMLInputElement).value = correctlyValue;
    setHeight(correctlyValue);
    await renderLoaderOrChart();
  });

  const editColor = document.querySelector('#edit-color') as HTMLInputElement;
  editColor.addEventListener('change', async (event) => {
    setColor((event.target as HTMLInputElement).value);
    await renderLoaderOrChart();
  });
};

export const listeners = (): void => {
  const body = document.querySelector('#body') as HTMLElement;

  body.addEventListener('click', async (event: MouseEvent) => {
    const addRemoveButton = event.target as HTMLElement;
    if (addRemoveButton.classList.contains('remove-row')) {
      removeRow(addRemoveButton.dataset.id!);
      const removeRows = document.querySelectorAll('.remove-row') as NodeListOf<HTMLElement>;
      if (removeRows.length !== 1) {
        renderMainParametersInner();
        listenersMainInput();
        await renderLoaderOrChart();
      }
    }
    if (addRemoveButton.classList.contains('remove-column')) {
      removeColumn(addRemoveButton.dataset.id!);
      const removeColumns = document.querySelectorAll('.remove-column') as NodeListOf<HTMLElement>;
      if (removeColumns.length !== 1) {
        renderMainParametersInner();
        listenersMainInput();
        await renderLoaderOrChart();
      }
    }
    if (addRemoveButton.classList.contains('add-row')) {
      addRow();
      renderMainParametersInner();
      listenersMainInput();
      await renderLoaderOrChart();
    }
    if (addRemoveButton.classList.contains('add-column')) {
      addColumn();
      renderMainParametersInner();
      listenersMainInput();
      await renderLoaderOrChart();
    }

    const downloadButton = event.target as HTMLButtonElement;
    if (downloadButton.classList.contains('download-PNG')) {
      await saveCharts(Extensions.png);
    }
    if (downloadButton.classList.contains('download-JPG')) {
      await saveCharts(Extensions.jpg);
    }
    if (downloadButton.classList.contains('reset')) {
      resetChart();
      renderMainParametersInner();
      renderAdditionalParametersInner();
      listenersMainInput();
      listenersAdditionalInput();
      await renderLoaderOrChart();
    }

    if (downloadButton.classList.contains('page-create')) {
      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showPage1();
    }
    if (downloadButton.classList.contains('page-examples')) {
      localStorage.setItem(LocalStorageKeys.view, ViewPage.examples);
      await showPage2();
    }

    if (downloadButton.classList.contains('edit-example-1')) {
      setState(exampleValueFirst);
      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showPage1();
    }
    if (downloadButton.classList.contains('edit-example-2')) {
      setState(exampleValueSecond);
      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showPage1();
    }
    if (downloadButton.classList.contains('edit-example-3')) {
      setState(exampleValueThird);
      localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
      await showPage1();
    }

    const selectTypeButton = (event.target as HTMLElement).closest('.imageContainer');
    const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;
    if (!selectTypeButton) {
      return;
    }
    if (selectTypeButton.classList.contains('type-bar')) {
      setType(TypeCharts.bar);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.bar);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
    if (selectTypeButton.classList.contains('type-horizontalBar')) {
      setType(TypeCharts.hBar);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.hBar);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
    if (selectTypeButton.classList.contains('type-line')) {
      setType(TypeCharts.line);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.line);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
    if (selectTypeButton.classList.contains('type-radar')) {
      setType(TypeCharts.radar);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.radar);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
    if (selectTypeButton.classList.contains('type-pie')) {
      setType(TypeCharts.pie);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.pie);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
    if (selectTypeButton.classList.contains('type-doughnut')) {
      setType(TypeCharts.doughnut);
      localStorage.setItem(LocalStorageKeys.type, TypeCharts.doughnut);
      showActiveClass(selectTypeButton);
      if (imageContainer) {
        await renderLoaderOrChart();
      } else {
        await renderLoaderOrExamples();
      }
    }
  });
};
