export interface Datasets {
  label: string;
  data: number[];
}

interface Title {
  display: boolean;
  text: string;
}

export interface ChartParameters {
  type: string;
  data: {
    labels: string[];
    datasets: Datasets[];
  };
  options: {
    title: Title;
  };
  backgroundColor: string;
  width: number;
  height: number;
}

export enum LocalStorageKeys {
  mainState = 'chartParametersState',
  example1 = 'exampleValueFirst',
  example2 = 'exampleValueSecond',
  example3 = 'exampleValueThird',
  view = 'view',
  type = 'type',
}

export enum TypeCharts {
  bar = 'bar',
  hBar = 'horizontalBar',
  line = 'line',
  radar = 'radar',
  pie = 'pie',
  doughnut = 'doughnut',
}

export enum ViewPage {
  create = 'create',
  examples = 'examples',
}

export enum Extensions {
  png = 'png',
  jpg = 'jpg',
}
