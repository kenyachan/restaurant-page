import pastaImage from './penne.jpeg';

export default function menuPage() {
    const menuPage = document.createElement('section');
    menuPage.classList.add('page-width');
    menuPage.setAttribute('id', 'menu-page');

    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    header.appendChild(heading);
    menuPage.appendChild(header);

    const main = document.createElement('main');
    menuPage.appendChild(main);

    const menuItem = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem.getMenuItemElement());

    const menuItem2 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem2.getMenuItemElement());

    const menuItem3 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem3.getMenuItemElement());

    const menuItem4 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem4.getMenuItemElement());

    const menuItem5 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem5.getMenuItemElement());

    const menuItem6 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', pastaImage);
    main.appendChild(menuItem6.getMenuItemElement());
    return menuPage;
}

const MenuItem = (name, price, imageSrc) => {
    const menuItemElement = createMenuItemElement(name, price, imageSrc);

    function createMenuItemElement(name, price, imageSrc) {
        const menuItemElement = document.createElement('div');
        
        menuItemElement.classList.add('menu-item');

        const img = new Image();
        img.src = imageSrc;
        menuItemElement.appendChild(img);

        const itemName = document.createElement('p');
        itemName.classList.add('description');
        itemName.textContent = name;
        menuItemElement.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = price;
        menuItemElement.appendChild(itemPrice);    

        return menuItemElement;
    }

    const getName = () => {
        return name;
    }

    const getPrice = () => {
        return price;
    }

    const getImgSrc = () => {
        return imageSrc;
    }

    const getMenuItemElement = () => {
        return menuItemElement;
    }

    return {
        getName,
        getPrice,
        getImgSrc,
        getMenuItemElement,
    }
} 

