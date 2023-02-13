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
  bg = 'bg',
  language = 'language',
  city = 'city',
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
  main = 'mainPage',
  create = 'createPage',
  examples = 'examplesPage',
  gallery = 'galleryPage',
  info = 'infoPage',
}

export enum Extensions {
  png = 'png',
  jpg = 'jpg',
}

export interface LangInt {
  [el:string]: { [lang:string]:string }
}
