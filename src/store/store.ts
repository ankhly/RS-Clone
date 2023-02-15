import { ChartParameters, LocalStorageKeys, TypeCharts, ViewPage } from '../utils/types';

export const chartParametersState: ChartParameters = JSON.parse(localStorage.getItem(LocalStorageKeys.mainState)!) || {
  type: 'bar',
  data: {
    labels: ['Строка 1', 'Строка 2', 'Строка 3', 'Строка 4', 'Строка 5'],
    datasets: [
      {
        label: 'Заголовок 1',
        data: [1, 2, 3, 4, 5],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Заголовок графика',
    },
  },
  backgroundColor: 'transparent',
  width: 800,
  height: 400,
};

export const globalState = {
  view: localStorage.getItem(LocalStorageKeys.view) || ViewPage.main,
  type: localStorage.getItem(LocalStorageKeys.type) || TypeCharts.bar,
};
