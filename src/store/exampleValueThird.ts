import { ChartParameters, LocalStorageKeys } from '../utils/types';

export const exampleValueThird: ChartParameters = JSON.parse(localStorage.getItem(LocalStorageKeys.example3)!) || {
  type: 'bar',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: '',
        data: [5.2, 5.4, 5.9, 9.6, 15.9],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Среднегодовая инфляция в Беларуси, процентов',
    },
  },
  backgroundColor: 'transparent',
  width: 800,
  height: 400,
};
