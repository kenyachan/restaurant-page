import pastaImage from './pasta.jpeg';

export default function menuPage() {
    const menuPage = document.createElement('section');
    menuPage.classList.add('page-width');

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuPage.appendChild(menuItem);

    const menuItemImage = new Image();
    menuItemImage.src = pastaImage;
    menuItem.appendChild(menuItemImage);

    const menuItemText = document.createElement('div');
    menuItemText.classList.add('menu-item-text');
    menuItem.appendChild(menuItemText);

    const menuItemName = document.createElement('p');
    menuItemName.classList.add('menu-item-name');
    menuItemName.textContent = 'Menu Item Name';
    menuItemText.appendChild(menuItemName);

    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('menu-item-price');
    menuItemPrice.textContent = '$99.99';
    menuItemText.appendChild(menuItemPrice);

    return menuPage;
}

function createMenuItem(name, price, imageSrc) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = new Image();
    img.src = imageSrc;
    menuItem.appendChild(img);

    const itemText = document.createElement('div');
    itemText.classList.add('menu-item-text');
    menuItem.appendChild(itemText);

    const itemName = document.createElement('p');
    itemName.classList.add('menu-item-name');
    itemName.textContent = name;
    itemText.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item-price');
    itemPrice.textContent = price;
    itemText.appendChild(itemPrice);

    return menuItem;
};

const MenuItem = (name, price, imageSrc) => {
    const menuItemElement = createMenuItemElement();

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

    return {
        getName,
        getPrice,
        getImgSrc,
    }
} 

