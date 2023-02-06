import { getAddress } from '../services/api';
import { chartParametersState } from '../services/store';

const getBase64FromUrl = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

export const saveCharts = async (extension: string): Promise<void> => {
  const address = await getAddress(chartParametersState);
  const addressBase64 = await getBase64FromUrl(address);
  const link = document.createElement('a');
  link.setAttribute('href', `${addressBase64}`);
  link.setAttribute('download', `image.${extension}`);
  link.click();
};
