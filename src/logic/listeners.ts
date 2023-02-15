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
import { saveCharts, shareCharts, showActiveClass } from '../utils/helpers';
import { renderLoaderOrExamples } from '../components/viewChartExamples/viewChartExamples';
import { showCreateBlock, showExamplesBlock, showExamplesBlockInInfo } from './showPages';
import { renderHtml } from '../components/mainRender';
import { renderCreatePage } from '../components/pageCreate/create';
import { examplesPage } from '../components/pageExamples/examples';
import { infoPage } from '../components/pageInfo/info';
import { colorMod } from './colorMod';
import { chooseLanguage, closePopup, renderPopup } from './changeLanguage';
import { changePage } from '../components/showPages';
import { Extensions, LocalStorageKeys, TypeCharts, ViewPage } from '../utils/types';
import { exampleValueFirst } from '../store/exampleValueFirst';
import { exampleValueSecond } from '../store/exampleValueSecond';
import { exampleValueThird } from '../store/exampleValueThird';
import { getLanguage } from './changeLanguage';
import { historyResolver } from './routing';

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

const listenersAddRemoveButtons = async (event: MouseEvent): Promise<void> => {
  const addRemoveButton = event.target as HTMLElement;

  if (addRemoveButton.classList.contains('remove-row')) {
    removeRow(addRemoveButton.dataset.id!);
    const removeRows = document.querySelectorAll('.remove-row') as NodeListOf<HTMLElement>;
    if (removeRows.length !== 1) {
      renderMainParametersInner();
      listenersMainInput();
      await renderLoaderOrChart();
      getLanguage();
    }
  }
  if (addRemoveButton.classList.contains('remove-column')) {
    removeColumn(addRemoveButton.dataset.id!);
    const removeColumns = document.querySelectorAll('.remove-column') as NodeListOf<HTMLElement>;
    if (removeColumns.length !== 1) {
      renderMainParametersInner();
      listenersMainInput();
      await renderLoaderOrChart();
      getLanguage();
    }
  }
  if (addRemoveButton.classList.contains('add-row')) {
    addRow();
    renderMainParametersInner();
    listenersMainInput();
    await renderLoaderOrChart();
    getLanguage();
  }
  if (addRemoveButton.classList.contains('add-column')) {
    addColumn();
    renderMainParametersInner();
    listenersMainInput();
    await renderLoaderOrChart();
    getLanguage();
  }
};

const listenersDownloadButtons = async (event: MouseEvent): Promise<void> => {
  const downloadButton = event.target as HTMLButtonElement;
  if (downloadButton.classList.contains('download-PNG')) {
    await saveCharts(Extensions.png);
  }
  if (downloadButton.classList.contains('download-JPG')) {
    await saveCharts(Extensions.jpg);
  }
  if (downloadButton.classList.contains('share')) {
    await shareCharts();
  }
  if (downloadButton.classList.contains('reset')) {
    resetChart();
    renderMainParametersInner();
    renderAdditionalParametersInner();
    listenersMainInput();
    listenersAdditionalInput();
    await renderLoaderOrChart();
    getLanguage();
  }
};

const listenersEditExampleButtons = async (event: MouseEvent): Promise<void> => {
  const editExampleButton = event.target as HTMLButtonElement;
  if (editExampleButton.classList.contains('edit-example-1')) {
    historyResolver(ViewPage.create);

    setState(exampleValueFirst);
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    renderHtml(renderCreatePage());
    await showCreateBlock();
  }
  if (editExampleButton.classList.contains('edit-example-2')) {
    historyResolver(ViewPage.create);

    setState(exampleValueSecond);
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    renderHtml(renderCreatePage());
    await showCreateBlock();
  }
  if (editExampleButton.classList.contains('edit-example-3')) {
    historyResolver(ViewPage.create);

    setState(exampleValueThird);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();
  }
};

const listenersOnDifferentPageButtons = async (event: MouseEvent): Promise<void> => {
  const button = event.target as HTMLButtonElement;

  if (button.classList.contains('create-chart-button')) {
    historyResolver(ViewPage.create);

    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();
  }
  if (button.classList.contains('examples-chart-button')) {
    historyResolver(ViewPage.examples);

    renderHtml(examplesPage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.examples);
    await showExamplesBlock();
  }
  if (button.classList.contains('info-chart-button')) {
    historyResolver(ViewPage.info);

    renderHtml(infoPage());
    await showExamplesBlockInInfo();
    localStorage.setItem(LocalStorageKeys.view, ViewPage.info);
  }
  if (button.classList.contains('create-bar')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.bar);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.bar);
    const selectTypeButton1 = document.querySelector('.type-bar') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
  if (button.classList.contains('create-horizontalBar')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.hBar);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.hBar);
    const selectTypeButton1 = document.querySelector('.type-horizontalBar') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
  if (button.classList.contains('create-line')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.line);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.line);
    const selectTypeButton1 = document.querySelector('.type-line') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
  if (button.classList.contains('create-radar')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.radar);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.radar);
    const selectTypeButton1 = document.querySelector('.type-radar') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
  if (button.classList.contains('create-pie')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.pie);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.pie);
    const selectTypeButton1 = document.querySelector('.type-pie') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
  if (button.classList.contains('create-doughnut')) {
    historyResolver(ViewPage.create);

    setType(TypeCharts.doughnut);
    renderHtml(renderCreatePage());
    localStorage.setItem(LocalStorageKeys.view, ViewPage.create);
    await showCreateBlock();

    localStorage.setItem(LocalStorageKeys.type, TypeCharts.doughnut);
    const selectTypeButton1 = document.querySelector('.type-doughnut') as HTMLElement;
    showActiveClass(selectTypeButton1);
  }
};

const listenerScrollButton = (event: MouseEvent): void => {
  const scrollButton = event.target as HTMLDivElement;
  if (scrollButton.classList.contains('scroll-up')) {
    window.scrollTo(0, 0);
  }
};

const listenersSelectTypeButtons = async (event: MouseEvent): Promise<void> => {
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
};

export const listeners = (): void => {
  document.addEventListener('click', async (event: MouseEvent): Promise<void> => {

    await listenersAddRemoveButtons(event);
    await listenersDownloadButtons(event);
    await listenersEditExampleButtons(event);
    await listenersOnDifferentPageButtons(event);

    colorMod(event);
    renderPopup(event);
    closePopup(event);
    chooseLanguage(event);
    await changePage(event);

    listenerScrollButton(event);

    await listenersSelectTypeButtons(event);
  });
};
