export const loader = (): string => `
  <div class="lds-ripple"><div></div><div></div></div>
`;

export const renderLoader = (): void => {
  const imageContainer = document.querySelector('#imageContainer') as HTMLDivElement;

  imageContainer.innerHTML = `${loader()}`;
};

export const renderLoaderExamples = (): void => {
  const imageContainer1 = document.querySelector('#imageContainer-1') as HTMLDivElement;
  const imageContainer2 = document.querySelector('#imageContainer-2') as HTMLDivElement;
  const imageContainer3 = document.querySelector('#imageContainer-3') as HTMLDivElement;

  imageContainer1.innerHTML = `${loader()}`;
  imageContainer2.innerHTML = `${loader()}`;
  imageContainer3.innerHTML = `${loader()}`;
};
