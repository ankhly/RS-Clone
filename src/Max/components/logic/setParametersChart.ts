import { chartParametersState } from '../../services/store';
import { Datasets } from '../../types';

export const setType = (newType: string): void => {
  chartParametersState.type = newType;

  localStorage.setItem('chartParametersState', JSON.stringify(chartParametersState));
};

export const removeRow = (id: string): void => {
  chartParametersState.data.labels =
    chartParametersState.data.labels.length !== 1
      ? chartParametersState.data.labels = chartParametersState.data.labels.filter((item: string, index: number) => {
        if (index !== +id) {
          return item;
        }
      })
      : chartParametersState.data.labels;

  chartParametersState.data.datasets = [
    ...chartParametersState.data.datasets.map((item: Datasets, index: number) => {
      return {
        label: chartParametersState.data.datasets[index].label,
        data: chartParametersState.data.datasets[index].data.length !== 1
          ? chartParametersState.data.datasets[index].data.filter(
            (item1: number, index1: number) => {
              if (index1 !== +id) {
                return item1;
              }
            },
          )
          : chartParametersState.data.datasets[index].data,
      };
    }),
  ];

  localStorage.setItem('chartParametersState', JSON.stringify(chartParametersState));
};

export const removeColumn = (id: string): void => {
  chartParametersState.data.datasets =
    chartParametersState.data.datasets.length !== 1
      ? chartParametersState.data.datasets.filter((item, index) => {
        if (index !== +id) {
          return item;
        }
      })
      : chartParametersState.data.datasets;

  localStorage.setItem('chartParametersState', JSON.stringify(chartParametersState));
};

export const addRow = (): void => {
  let num: number = 0;
  let ind: number = 0;

  chartParametersState.data.labels.map((item, index, array) => {
    num = array.length + 1;
    ind = index + 2;
    return item;
  });

  chartParametersState.data.labels = [...chartParametersState.data.labels, `Строка ${num}`];

  chartParametersState.data.datasets = [
    ...chartParametersState.data.datasets.map((item, index) => {
      return {
        label: chartParametersState.data.datasets[index].label,
        data: [...chartParametersState.data.datasets[index].data, ind],
      };
    }),
  ];

  localStorage.setItem('chartParametersState', JSON.stringify(chartParametersState));
};

export const addColumn = (): void => {
  let ind1: number = 0;

  chartParametersState.data.datasets.map((item, index) => {
    ind1 = index + 2;
  });

  const data = chartParametersState.data.datasets[0].data;
  const object = {
    label: `Заголовок ${ind1}`,
    data: [...data],
  };

  chartParametersState.data.datasets = [...chartParametersState.data.datasets, object];

  localStorage.setItem('chartParametersState', JSON.stringify(chartParametersState));
};
