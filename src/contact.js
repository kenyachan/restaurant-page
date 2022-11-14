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
    const operatingHours = OperatingHours('Monday to Sunday', '11am - late');

    pageBlock.appendChild(location.getLocationElement());
    pageBlock.appendChild(operatingHours.getOperatingHoursElement());
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

const OperatingHours = (days, times) => {
    const operatingHoursElement = createOperatingHoursElement(days, times);

    function createOperatingHoursElement(days, times) {
        const operatingHoursElement = document.createElement('section');
        operatingHoursElement.setAttribute('id', 'operating-hours');
        operatingHoursElement.classList.add('info-block');    

        const heading = document.createElement('h2');
        heading.textContent = 'Opening Hours';
        operatingHoursElement.appendChild(heading);

        const daysLine = document.createElement('p');
        daysLine.textContent = days;
        operatingHoursElement.appendChild(daysLine);

        const hours = document.createElement('p');
        hours.textContent = times;
        operatingHoursElement.appendChild(hours);

        return operatingHoursElement;
    }
    
    const getOperatingHoursElement = () => {
        return operatingHoursElement;
    }

    return {
        getOperatingHoursElement,
    }
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
