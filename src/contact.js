export default function contactPage() {
    const contactPage = document.createElement('section');
    contactPage.setAttribute('id', 'contact-page');
    contactPage.classList.add('page-width');

    const pageBlock = document.createElement('div');
    pageBlock.classList.add('page-block');
    contactPage.appendChild(pageBlock);

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Contact Us';
    pageBlock.appendChild(pageHeading);

    const location = Location('123', 'Fake St', 'Suburb', 'STATE', '2000');
    const locationElement = location.getLocationElement();

    pageBlock.appendChild(locationElement);
    pageBlock.appendChild(operatingHours());
    pageBlock.appendChild(phoneNumber());

    return contactPage;
}

const Location = (number, street, suburb, state, postCode) => {
    const _addressLine1 = `${number} ${street}`;
    const _addressLine2 = `${suburb}, ${state} ${postCode}`;
    const locationElement = createLocationElement(_addressLine1, _addressLine2);

    function createLocationElement(addressLine1, addressLine2) {
        const locationElement = document.createElement('section');
        locationElement.setAttribute('id', 'address');
        locationElement.classList.add('info-block');

        const heading = document.createElement('h2');
        heading.textContent = 'Location';
        locationElement.appendChild(heading);

        const addressLine1Element = document.createElement('p');
        addressLine1Element.textContent = addressLine1;
        locationElement.appendChild(addressLine1Element);
        
        const addressLine2Element = document.createElement('p');
        addressLine2Element.textContent = addressLine2;
        locationElement.appendChild(addressLine2Element);

        return locationElement;
    }

    const getAddress = () => {
        return `${_addressLine1}, ${_addressLine2}`;
    }

    const getAddressLine1 = () => {
        return _addressLine1;
    }

    const getAddressLine2 = () => {
        return _addressLine2;
    }

    const getLocationElement = () => {
        return locationElement;
    }

    return {
        getLocationElement,
        getAddress,
        getAddressLine1,
        getAddressLine2,
    }
}

// function location() {
//     const location = document.createElement('section');
//     location.setAttribute('id', 'address');
//     location.classList.add('info-block');

//     const heading = document.createElement('h2');
//     heading.textContent = 'Location';
//     location.appendChild(heading);

//     const addressLine1 = document.createElement('p');
//     addressLine1.textContent = '123 Totally Real Address';
//     location.appendChild(addressLine1);
    
//     const addressLine2 = document.createElement('p');
//     addressLine2.textContent = 'Good Suburb, STATE 2000';
//     location.appendChild(addressLine2);

//     return location;
// }

function operatingHours() {
    const operatingHours = document.createElement('section');
    operatingHours.setAttribute('id', 'operating-hours');
    operatingHours.classList.add('info-block');

    const heading = document.createElement('h2');
    heading.textContent = 'Opening Hours';
    operatingHours.appendChild(heading);

    const days = document.createElement('p');
    days.textContent = 'Monday to Sunday';
    operatingHours.appendChild(days);

    const hours = document.createElement('p');
    hours.textContent = '11am - late';
    operatingHours.appendChild(hours);

    return operatingHours;
}

function phoneNumber() {
    const phoneNumber = document.createElement('section');
    phoneNumber.setAttribute('id', 'phone-number');
    phoneNumber.classList.add('info-block');

    const heading = document.createElement('h2');
    heading.textContent = 'Phone';
    phoneNumber.appendChild(heading);

    const number = document.createElement('p');
    number.textContent = '02 1234 5678';
    phoneNumber.appendChild(number);

    return phoneNumber;
}