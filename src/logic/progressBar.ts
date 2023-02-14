export const progressBar = (): void => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = scroll / height * 100;

  const progressBarNode = document.querySelector('#progress-bar') as HTMLDivElement;
  progressBarNode.style.width = `${scrolled}%`;
};
