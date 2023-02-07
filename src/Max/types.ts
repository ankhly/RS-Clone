import {chartParametersState} from "./services/store";

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

export enum ViewPage {
  create = 'create',
  examples = 'examples',
}

export enum LocalStorageKeys {
  mainState = 'chartParametersState',
  example1 = 'exampleValueFirst',
  example2 = 'exampleValueSecond',
  example3 = 'exampleValueThird',
  view = 'view',
}
