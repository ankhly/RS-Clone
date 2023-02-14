export const pageUp = () => `
  <a href="#">
    <div class="circle">
      <span class="line line1"></span>
      <span class="line line2"></span>
    </div>
  </a>
`;

function scroll() { 
  document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle') as HTMLElement;
    circle.hidden = true; 
  });
  window.addEventListener('scroll', () => {
    const circle = document.querySelector('.circle') as HTMLElement;    
    circle.hidden = (scrollY < document.documentElement.clientHeight)    
  });
}
scroll();
