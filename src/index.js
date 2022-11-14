import './style.css';
import * as siteComponents from './site-components';
import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';
import backgroundImgSrc from './background.jpeg';

const body = document.querySelector('body');

const backgroundImg = new Image();
backgroundImg.src = backgroundImgSrc;
backgroundImg.setAttribute('id', 'background-img');
backgroundImg.classList.add('background-img');

body.appendChild(backgroundImg);

const header = siteComponents.Header();
const headerElement = header.getHeaderElement();

const navbar = siteComponents.NavBar('Home', 'Menu', 'Contact');
headerElement.querySelector('.page-width').appendChild(navbar.getNavBarElement());

const navBarElement = navbar.getNavBarElement();
const homeLink = navBarElement.querySelector('#home');
const menuLink = navBarElement.querySelector('#menu');
const contactLink = navBarElement.querySelector('#contact');

homeLink.classList.add('active');

const content = document.createElement('main');
content.setAttribute('id', 'content');
content.appendChild(homePage());

const footer = siteComponents.Footer();
const footerElement = footer.getFooterElement();

body.appendChild(headerElement);
body.appendChild(content);
body.appendChild(footerElement);


homeLink.addEventListener('click', () => {
    loadHomePage();    
});

menuLink.addEventListener('click', () => {
    loadMenuPage();
});

contactLink.addEventListener('click', () => {
    loadContactsPage();
});

const loadHomePage = () => {
    content.replaceChild(homePage(), content.firstChild);
}

const loadContactsPage = () => {
    content.replaceChild(contactPage(), content.firstChild)
}

const loadMenuPage = () => {
    content.replaceChild(menuPage(), content.firstChild);
}