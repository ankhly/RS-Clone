const colorModParams = {
  icon:false,
  bg:false,
};

export const colorMod = (e:Event) => {
  const colorModBtn = document.querySelector('.actions__bg') as HTMLElement;
  const html = document.querySelector('html') as HTMLElement;

  if (e.target === colorModBtn) {
    colorModParams.icon =  colorModBtn.classList.toggle('white');
    colorModParams.bg =  html.classList.toggle('dark');
    localStorage.setItem('bg', JSON.stringify(colorModParams));
  }
};

export const getColorMod = () => {
  const colorModBtn = document.querySelector('.actions__bg') as HTMLElement;
  const html = document.querySelector('html') as HTMLElement;

  const getColorModParam = JSON.parse(localStorage.getItem('bg') || JSON.stringify(colorModParams));
  if (getColorModParam.icon === true && getColorModParam.bg === true ) {
    colorModBtn.classList.add('white');
    html.classList.add('dark');
  }
};