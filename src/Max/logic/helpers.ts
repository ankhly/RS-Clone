import { getAddress } from '../services/api';
import { chartParametersState, globalState }  from '../services/store';
import { TypeCharts } from '../types';

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

export const showActiveClass = (selectTypeButton: Element) => {
  const typeContainers = document.querySelectorAll('.imageContainer') as NodeListOf<HTMLElement>;
  for (let i = 0; i < typeContainers.length; i++) {
    typeContainers[i].classList.remove('image-container-active');
  }
  selectTypeButton.classList.add('image-container-active');
};

export const showActiveClassAfterRestart = () => {
  const typeBar = document.querySelector('.type-bar') as HTMLElement;
  const typeHorizontalBar = document.querySelector('.type-horizontalBar') as HTMLElement;
  const typeLine = document.querySelector('.type-line') as HTMLElement;
  const typeRadar = document.querySelector('.type-radar') as HTMLElement;
  const typePie = document.querySelector('.type-pie') as HTMLElement;
  const typeDoughnut = document.querySelector('.type-doughnut') as HTMLElement;
  switch (globalState.type) {
    case TypeCharts.bar:
      showActiveClass(typeBar);
      break;
    case TypeCharts.hBar:
      showActiveClass(typeHorizontalBar);
      break;
    case TypeCharts.line:
      showActiveClass(typeLine);
      break;
    case TypeCharts.radar:
      showActiveClass(typeRadar);
      break;
    case TypeCharts.pie:
      showActiveClass(typePie);
      break;
    case TypeCharts.doughnut:
      showActiveClass(typeDoughnut);
      break;
  }
};
