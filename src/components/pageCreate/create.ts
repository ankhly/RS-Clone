export const renderCreatePage = (): string => `
  <div class="page__create create-page">
  <div class="main-page__animation" style="display: none"></div>
    <h1 class="create-page__title main-title"></h1>
    <div class="create-page__body">
      <div id="main-logic-container" class="create-page__content"></div>
      <div class="create-page__how how-create">
        <div class="how-create__body">
          <h2 class="how-create__title"></h2>
          <div class="how-create__description">
            <div class="how-create__step">
              <span class="one">1. </span>
              <i class="step1"></i>
            </div>
            <div class="how-create__step">
              <span class="two">2. </span>
              <i class="step2"></i>
            </div>
            <div class="how-create__step">
              <span class="three">3. </span>
              <i class="step3"></i>
            </div>
          </div>
          <div class="how-create__buttons">
            <button class="how-create__read button-more btnmore1 info-chart-button"></button>
            <button class="how-create__look button-more btnmore2 examples-chart-button"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
