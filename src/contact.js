export default function contactPage() {
    const contactPage = document.createElement('section');
    contactPage.classList.add('page-width');

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Contact Us';
    contactPage.appendChild(pageHeading);

    contactPage.appendChild(location());
    contactPage.appendChild(operatingHours());
    contactPage.appendChild(phoneNumber());

    return contactPage;
}

function location() {
    const location = document.createElement('section');

    const heading = document.createElement('h2');
    heading.textContent = 'Location';
    location.appendChild(heading);

    const address = document.createElement('p');
    address.textContent = '123 Totally Real Address, Good Suburb, STATE 2000';
    location.appendChild(address);

    return location;
}

function operatingHours() {
    const operatingHours = document.createElement('section');

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

    const heading = document.createElement('h2');
    heading.textContent = 'Phone';
    phoneNumber.appendChild(heading);

    const number = document.createElement('p');
    number.textContent = '02 1234 5678';
    phoneNumber.appendChild(number);

    return phoneNumber;
}