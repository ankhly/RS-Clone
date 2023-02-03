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
