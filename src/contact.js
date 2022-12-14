export default function contactPage() {
    const contactPage = document.createElement('section');
    contactPage.setAttribute('id', 'contact-page');
    contactPage.classList.add('page-width');
    contactPage.classList.add('page');

    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    header.appendChild(heading);
    contactPage.appendChild(header);

    const main = document.createElement('main');
    contactPage.appendChild(main);

    const location = Location('123', 'Fake St', 'Suburb', 'STATE', '2000');
    const operatingHours = OperatingHours('Monday to Sunday', '11am - late');
    const phoneNumber = PhoneNumber('+61 2 1234 5678');

    main.appendChild(location.getLocationElement());
    main.appendChild(operatingHours.getOperatingHoursElement());
    main.appendChild(phoneNumber.getPhoneNumberElement());

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

const PhoneNumber = (phoneNumber) => {
    const phoneNumberElement = createPhoneNumberElement(phoneNumber);

    function createPhoneNumberElement(phoneNumber) {
        const phoneNumberElement = document.createElement('section');
        phoneNumberElement.setAttribute('id', 'phone-number');
        phoneNumberElement.classList.add('info-block');

        const heading = document.createElement('h2');
        heading.textContent = 'Phone';
        phoneNumberElement.appendChild(heading);

        const number = document.createElement('p');
        number.textContent = phoneNumber;
        phoneNumberElement.appendChild(number);    

        return phoneNumberElement;
    }

    const getPhoneNumberElement = () => {
        return phoneNumberElement;
    }

    const getPhoneNumber = () => {
        return phoneNumber;
    }

    return {
        getPhoneNumber,
        getPhoneNumberElement,
    }
}
