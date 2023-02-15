export const scrollHiddenLoaded = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle') as HTMLElement;
    circle.hidden = true;
  });
};

export const scrollHiddenScrolled = (): void => {
  const circle = document.querySelector('.circle') as HTMLElement;
  circle.hidden = (scrollY < document.documentElement.clientHeight);
};
