import { ChartParameters } from '../utils/types';

const baseURL: string = 'https://quickchart.io/chart';

export const getAddress = async (chartParametersState: ChartParameters): Promise<string> => {
  const labels = JSON.stringify(chartParametersState.data.labels);
  const datasets = JSON.stringify(chartParametersState.data.datasets)
    .replace('"label"', 'label')
    .replace('"data"', 'data');

  const type = `type:'${chartParametersState.type}'`;
  const data = `data:{labels:${labels}, datasets:${datasets}}`;
  const options = `options:{title:{display:true, text:'${chartParametersState.options.title.text}'}}`;
  const background = `backgroundColor=${chartParametersState.backgroundColor}`;
  const width = `width=${chartParametersState.width}`;
  const height = `height=${chartParametersState.height}`;

  return (
    await fetch(`${baseURL}?c={${type},${data},${options}}&${background}&${width}&${height}&devicePixelRatio=1`)
  ).url;
};
