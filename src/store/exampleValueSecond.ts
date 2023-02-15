import { ChartParameters, LocalStorageKeys } from '../utils/types';

export const exampleValueSecond: ChartParameters = JSON.parse(localStorage.getItem(LocalStorageKeys.example2)!) || {
  type: 'bar',
  data: {
    labels: [
      'Январь',
      'Февраль',
      'Март',
      'Аперель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    datasets: [
      {
        label: '2018',
        data: [859, 850, 926, 921, 943, 953, 973, 987, 963, 999, 994, 1115],
      },
      {
        label: '2019',
        data: [ 981, 977, 1056, 1073, 1071, 1080, 1128, 1117, 1108, 1123, 1113, 1238 ],
      },
      {
        label: '2020',
        data: [ 1118, 1119, 1213, 1193, 1227, 1248, 1287, 1276, 1264, 1285, 1300, 1474 ],
      },
      {
        label: '2021',
        data: [ 1290, 1277, 1384, 1398, 1419, 1433, 1471, 1463, 1442, 1478, 1476, 1675 ],
      },
      {
        label: '2022',
        data: [ 1477, 1563, 1602, 1567, 1573, 1626, 1644, 1665, 1637, 1636, 1648, 1915 ],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Средняя заработная плата в Беларуси, рублей',
    },
  },
  backgroundColor: 'transparent',
  width: 800,
  height: 400,
};
