import { chartParametersState } from '../store/store';
import { ChartParameters, Datasets, LocalStorageKeys } from '../utils/types';
import { exampleValueFirst } from '../store/exampleValueFirst';
import { exampleValueSecond } from '../store/exampleValueSecond';
import { exampleValueThird } from '../store/exampleValueThird';

export const setType = (newType: string): void => {
  chartParametersState.type = newType;
  exampleValueFirst.type = newType;
  exampleValueSecond.type = newType;
  exampleValueThird.type = newType;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
  localStorage.setItem(LocalStorageKeys.example1, JSON.stringify(exampleValueFirst));
  localStorage.setItem(LocalStorageKeys.example2, JSON.stringify(exampleValueSecond));
  localStorage.setItem(LocalStorageKeys.example3, JSON.stringify(exampleValueThird));
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

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const removeColumn = (id: string): void => {
  chartParametersState.data.datasets =
    chartParametersState.data.datasets.length !== 1
      ? chartParametersState.data.datasets.filter((item: Datasets, index: number) => {
        if (index !== +id) {
          return item;
        }
      })
      : chartParametersState.data.datasets;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const addRow = (): void => {
  let num: number = 0;
  let ind: number = 0;

  chartParametersState.data.labels.map((item: string, index: number, array: string[]) => {
    num = array.length + 1;
    ind = index + 2;
    return item;
  });

  chartParametersState.data.labels = [...chartParametersState.data.labels, `Строка ${num}`];

  chartParametersState.data.datasets = [
    ...chartParametersState.data.datasets.map((item: Datasets, index: number) => {
      return {
        label: chartParametersState.data.datasets[index].label,
        data: [...chartParametersState.data.datasets[index].data, ind],
      };
    }),
  ];

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const addColumn = (): void => {
  let ind1: number = 0;

  chartParametersState.data.datasets.map((item: Datasets, index: number) => {
    ind1 = index + 2;
  });

  const data = chartParametersState.data.datasets[0].data;
  const object = {
    label: `Заголовок ${ind1}`,
    data: [...data],
  };

  chartParametersState.data.datasets = [...chartParametersState.data.datasets, object];

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setLabelsRow = (id: number, value: string): void => {
  chartParametersState.data.labels = chartParametersState.data.labels.map((label: string, index: number) => {
    return id === index ? value : label;
  });

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setLabelsColumn = (id: number, value: string): void => {
  chartParametersState.data.datasets = [
    ...chartParametersState.data.datasets.map((item: Datasets, index: number) => {
      return {
        label: id === index ? value : chartParametersState.data.datasets[index].label,
        data: chartParametersState.data.datasets[index].data,
      };
    }),
  ];

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setDataColumn = (id: number, value: string, idColumn: number): void => {
  chartParametersState.data.datasets = chartParametersState.data.datasets.map((item: Datasets, index: number) => {
    return idColumn === index
      ? {
        label: item.label,
        data: item.data.map((itemData: number, indexData: number) => {
          return id === indexData ? +value : itemData;
        }),
      }
      : item;
  });

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setTitle = (value: string): void => {
  chartParametersState.options.title.text = value;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setWidth = (value: string): void => {
  chartParametersState.width = +value;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setHeight = (value: string): void => {
  chartParametersState.height = +value;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const setColor = (value: string): void => {
  chartParametersState.backgroundColor = `%23${value.slice(1)}`;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};

export const resetChart = (): void => {
  chartParametersState.data = {
    labels: ['Строка 1', 'Строка 2', 'Строка 3', 'Строка 4', 'Строка 5'],
    datasets: [
      {
        label: 'Заголовок 1',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
  chartParametersState.options.title.text = 'Заголовок графика';
  chartParametersState.backgroundColor = 'transparent';
  chartParametersState.width = 800;
  chartParametersState.height = 400;

  localStorage.removeItem(LocalStorageKeys.mainState);
};

export const setState = (example: ChartParameters): void => {
  chartParametersState.type = example.type;
  chartParametersState.data = example.data;
  chartParametersState.options.title.text = example.options.title.text;

  localStorage.setItem(LocalStorageKeys.mainState, JSON.stringify(chartParametersState));
};
