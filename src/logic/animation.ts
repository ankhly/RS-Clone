const marginColumn: number = 7;
const widthColumn: number = 15;
let leftPos: number = 0;

const colorChartColumn: string[] = [
  'rgb(226, 86, 89)',
  'rgb(242, 143, 39)',
  'rgb(77, 122, 169)',
  'rgb(119, 184, 180)',
];

const randomChartColumn = (arr: string[]): string => {
  const colorColumn = Math.floor(Math.random() * arr.length);
  return arr[colorColumn];
};

const randomHeight = (): number => {
  return Math.floor(Math.random() * 100);
};

const creatAnimation = (number: number): void => {
  const animationDiv = document.querySelector('.main-page__animation') as HTMLElement;

  for (let i = 0; i < number - 1; i++) {
    const chartColumn = document.createElement('div');
    chartColumn.classList.add('animation__chart-column');
    chartColumn.style.left = `${leftPos}px`;
    if (leftPos < Math.floor(animationDiv.offsetWidth - marginColumn)) {
      leftPos += widthColumn + marginColumn;
      animationDiv.appendChild(chartColumn);
    }
  }
};

const showAnimation = (): void => {
  const animationDiv = document.querySelector('.main-page__animation') as HTMLElement;

  const widthBlock = animationDiv.offsetWidth;
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
