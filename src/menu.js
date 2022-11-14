import pastaImage from './pasta.jpeg';

export default function menuPage() {
    const menuPage = document.createElement('section');
    menuPage.classList.add('page-width');

    const menuItem = MenuItem('Pasta', '$12.50', pastaImage);
    menuPage.appendChild(menuItem.getMenuItemElement());

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

        const itemText = document.createElement('div');
        itemText.classList.add('menu-item-text');
        menuItemElement.appendChild(itemText);

        const itemName = document.createElement('p');
        itemName.classList.add('menu-item-name');
        itemName.textContent = name;
        itemText.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('menu-item-price');
        itemPrice.textContent = price;
        itemText.appendChild(itemPrice);    

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

