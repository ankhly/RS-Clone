export const renderViewChart = (): string => {
  return  `
    <div class="chartResult">
      <h3 class="miniTitle">График</h3>
      <div class="imageContainer" id="imageContainer"></div>
    </div>
  `;
};

export const renderLoader = (): void => {
  const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;
  imageContainer.innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';
};


export const renderChart = (address: string): void => {
  const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;

  const imgChart = new Image();
  imgChart.src = address;
  imgChart.addEventListener('load', ():void => {
    imageContainer.innerHTML = '';
    imageContainer.append(imgChart);
  });
};
