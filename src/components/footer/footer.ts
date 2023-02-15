import rsschoolLogo from '../../../assets/rsschool-logo.svg';
import github from '../../../assets/GitHub.png';

export const renderFooter = (): string => {
  const wrapper = document.querySelector('.wrapper') as HTMLElement;

  const footer = `
    <footer class="footer">
      <div class="fooret__container container">
        <div class="footer-content">
          <div class="img-githubs">
            <a class="footer-link" href="https://github.com/ankhly" target="_blank">
              <img class="img-github" src=${github} alt="github1">
            </a>
            <a class="footer-link" href="https://github.com/VolhaYu" target="_blank">
              <img class="img-github" src=${github} alt="github2">
            </a>
            <a class="footer-link" href="https://github.com/MaksimkaSota" target="_blank">
              <img class="img-github" src=${github} alt="github3">
            </a>
          </div>
          <div class="year">
            <i>2023</i>
          </div>
          <a class="footer-link" href="https://rs.school/js/" target="_blank">
            <img class="rsschool-logo" src=${rsschoolLogo} alt="rsschool-logo">
          </a>
        </div>
      </div>
    </footer>
  `;

  wrapper.insertAdjacentHTML('beforeend', footer);

  return footer;
};
