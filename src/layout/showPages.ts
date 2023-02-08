import { renderHtml } from './mainRender';
import { galleryPage } from './gallery';
import { infoPage } from './info';
import { renderCreatePage } from './create';


export const changePage = (e:Event)=>{
  const menuLinks = document.querySelectorAll('.menu__link') as NodeListOf<Element>;
  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i] as HTMLElement;
    if (e.target === menuLink && menuLink.classList.contains('menu1')) {
      renderHtml(renderCreatePage());
    }
    if (e.target === menuLink && menuLink.classList.contains('menu2')) {
      renderHtml(galleryPage());
    }
    if (e.target === menuLink && menuLink.classList.contains('menu3')) {
      console.log('примеры');
    }
    if (e.target === menuLink && menuLink.classList.contains('menu4')) {
      renderHtml(infoPage());
    }
  }
};
