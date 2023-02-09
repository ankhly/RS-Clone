import { ChartParameters, LocalStorageKeys } from '../utils/types';

export const exampleValueFirst: ChartParameters = JSON.parse(localStorage.getItem(LocalStorageKeys.example1)!) || {
  type: 'bar',
  data: {
    labels: ['Все население', 'Мужчины', 'Женщины'],
    datasets: [
      {
        label: '2018',
        data: [9448, 4367, 5081],
      },
      {
        label: '2019',
        data: [9429, 4358, 5071],
      },
      {
        label: '2020',
        data: [9410, 4350, 5060],
      },
      {
        label: '2021',
        data: [9350, 4321, 5029],
      },
      {
        label: '2022',
        data: [9255, 4278, 4977],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Численность населения в Беларуси, тыс. человек',
    },
  },
  backgroundColor: 'transparent',
  width: 800,
  height: 400,
};
