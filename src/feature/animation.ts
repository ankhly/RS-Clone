const marginColumn = 7;
const widthColumn = 15;
let leftPos = 0;

const colorChartColumn = [
  'rgb(226, 86, 89)',
  'rgb(242, 143, 39)',
  'rgb(77, 122, 169)',
  'rgb(119, 184, 180)',
];

function randomChartColumn(arr: string[]) {
  const colorColumn = Math.floor(Math.random() * arr.length);
  return arr[colorColumn];
}

function randomHeight() {
  return Math.floor(Math.random() * 100);
}

function creatAnimation(number: number) {
  const animationDiv = document.querySelector('.main-page__animation') as HTMLElement;
  const pageContainer = document.querySelector('.page__container') as HTMLElement;

  for (let i = 0; i < number - 1; i++) {
    const chartColumn = document.createElement('div');
    chartColumn.classList.add('animation__chart-column');
    chartColumn.style.left = `${leftPos}px`;
    if (leftPos < Math.floor(pageContainer.offsetWidth)) {
      leftPos += widthColumn + marginColumn;
      animationDiv.appendChild(chartColumn);
    }
  }
}

const showAnimation = (): void => {
  const pageContainer = document.querySelector('.page__container') as HTMLElement;

  const widthBlock = pageContainer.offsetWidth;
  const numberColumn = Math.floor(widthBlock / (widthColumn + marginColumn));
  creatAnimation(numberColumn);
  const columns = document.getElementsByClassName('animation__chart-column') as HTMLCollectionOf<HTMLElement>;
  Array.from(columns).forEach(element  => {
    element.style.background = `${randomChartColumn(colorChartColumn)}`;
    element.style.height = `${randomHeight()}%`;
  });
};

export const animationLogic = () => {
  leftPos = 0;
  showAnimation();

  return setInterval(() => {
    showAnimation();
  }, 1500);
};
