export function quoteComponent() {
    const quoteComponent = document.createElement('p');

    const quoteText = 'This restaurant is awesome!';

    quoteComponent.textContent = quoteText;

    return quoteComponent;
}

export function heroImageComponent() {
    const heroImageComponent = document.createElement('img');

    const imgSrc = "../src/pasta.jpeg";

    heroImageComponent.setAttribute('src', imgSrc);

    return heroImageComponent;
}

export const Footer = () => {
    const footerElement =  createFooter();

    function createFooter() {
        const footerElement = document.createElement('footer');

        const pageWidth = document.createElement('div');
        pageWidth.classList.add('page-width');
        pageWidth.setAttribute('id', 'footer');
        footerElement.appendChild(pageWidth);
        
        const authorLink = document.createElement('a');
        const link = "https://github.com/kenyachan";
        const author = "Kenya Chan"
        authorLink.setAttribute('href', link);
        authorLink.textContent = author;
        
        const authorP = document.createElement('p');
        authorP.textContent = "Created by ";
        authorP.appendChild(authorLink);
        
        pageWidth.appendChild(authorP);    
    
        return footerElement;
    }

    const getFooterElement = () => {
        return footerElement;
    }

    return {
        getFooterElement,
    }
}

export const Header = () => {
    const headerElement = createHeader();
    
    function createHeader() {
        const headerElement = document.createElement('header');
        
        const pageWidth = document.createElement('div');
        pageWidth.classList.add('page-width');
        pageWidth.setAttribute('id', 'header');
        headerElement.appendChild(pageWidth);

        const logo = document.createElement('div');
        logo.classList.add('logo');
        pageWidth.appendChild(logo);
    
        const logoTop = document.createElement('p');
        logoTop.classList.add('logo-top');
        logoTop.textContent = 'K';
        logo.appendChild(logoTop);

        const logoBottom = document.createElement('p');
        logoBottom.classList.add('logo-bottom');
        logoBottom.textContent = 'Kitchen';
        logo.appendChild(logoBottom);

        return headerElement;
    }

    const getHeaderElement = () => {
        return headerElement;
    }

    return {
        getHeaderElement,
    }
}

export const NavBar = (...nodeNames) => {
    const navLinks = [];
    const navBarElement = createNavElement();

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            setLinkActive(event.target);
        });
    });

    function setLinkActive(link) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        link.classList.add('active');
    }

    function createNavElement() {
        const navbar = document.createElement('nav');

        const list = document.createElement('ul');
        navbar.appendChild(list);

        nodeNames.forEach(name => {
            const node = createNavLink(name);
            list.appendChild(node);
        });
        
        return navbar;
    }

    function createNavLink(name) {
        const listItem = document.createElement('li');

        const navLink = document.createElement('a');
        navLink.textContent = name;
        navLink.setAttribute('id', name.toLowerCase());

        listItem.appendChild(navLink);
        navLinks.push(navLink);

        return listItem;
    }

    const getNavBarElement = () => {
        return navBarElement;
    }

    const getNavLinks = () => {
        return navLinks;
    }

    return {
        getNavBarElement, 
        getNavLinks,
    }  
}