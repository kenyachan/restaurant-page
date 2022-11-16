/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFFBQVEsRUFBRSxPQUFPO0FBQzlDLDZCQUE2QixPQUFPLElBQUksT0FBTyxFQUFFLFNBQVM7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsY0FBYyxJQUFJLGNBQWM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb250YWN0UGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtcGFnZScpO1xuICAgIGNvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2Utd2lkdGgnKTtcbiAgICBjb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBMb2NhdGlvbignMTIzJywgJ0Zha2UgU3QnLCAnU3VidXJiJywgJ1NUQVRFJywgJzIwMDAnKTtcbiAgICBjb25zdCBvcGVyYXRpbmdIb3VycyA9IE9wZXJhdGluZ0hvdXJzKCdNb25kYXkgdG8gU3VuZGF5JywgJzExYW0gLSBsYXRlJyk7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBQaG9uZU51bWJlcignKzYxIDIgMTIzNCA1Njc4Jyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGxvY2F0aW9uLmdldExvY2F0aW9uRWxlbWVudCgpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG9wZXJhdGluZ0hvdXJzLmdldE9wZXJhdGluZ0hvdXJzRWxlbWVudCgpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBob25lTnVtYmVyLmdldFBob25lTnVtYmVyRWxlbWVudCgpKTtcblxuICAgIHJldHVybiBjb250YWN0UGFnZTtcbn1cblxuY29uc3QgTG9jYXRpb24gPSAobnVtYmVyLCBzdHJlZXQsIHN1YnVyYiwgc3RhdGUsIHBvc3RDb2RlKSA9PiB7XG4gICAgY29uc3QgX2FkZHJlc3NMaW5lMSA9IGAke251bWJlcn0gJHtzdHJlZXR9YDtcbiAgICBjb25zdCBfYWRkcmVzc0xpbmUyID0gYCR7c3VidXJifSwgJHtzdGF0ZX0gJHtwb3N0Q29kZX1gO1xuICAgIGNvbnN0IGxvY2F0aW9uRWxlbWVudCA9IGNyZWF0ZUxvY2F0aW9uRWxlbWVudChfYWRkcmVzc0xpbmUxLCBfYWRkcmVzc0xpbmUyKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uRWxlbWVudChhZGRyZXNzTGluZTEsIGFkZHJlc3NMaW5lMikge1xuICAgICAgICBjb25zdCBsb2NhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIGxvY2F0aW9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcbiAgICAgICAgbG9jYXRpb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8tYmxvY2snKTtcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgICAgIGxvY2F0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICBjb25zdCBhZGRyZXNzTGluZTFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzTGluZTFFbGVtZW50LnRleHRDb250ZW50ID0gYWRkcmVzc0xpbmUxO1xuICAgICAgICBsb2NhdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUxRWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRyZXNzTGluZTJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhZGRyZXNzTGluZTJFbGVtZW50LnRleHRDb250ZW50ID0gYWRkcmVzc0xpbmUyO1xuICAgICAgICBsb2NhdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmUyRWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBZGRyZXNzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7X2FkZHJlc3NMaW5lMX0sICR7X2FkZHJlc3NMaW5lMn1gO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEFkZHJlc3NMaW5lMSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9hZGRyZXNzTGluZTE7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWRkcmVzc0xpbmUyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2FkZHJlc3NMaW5lMjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMb2NhdGlvbkVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbkVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TG9jYXRpb25FbGVtZW50LFxuICAgICAgICBnZXRBZGRyZXNzLFxuICAgICAgICBnZXRBZGRyZXNzTGluZTEsXG4gICAgICAgIGdldEFkZHJlc3NMaW5lMixcbiAgICB9XG59XG5cbmNvbnN0IE9wZXJhdGluZ0hvdXJzID0gKGRheXMsIHRpbWVzKSA9PiB7XG4gICAgY29uc3Qgb3BlcmF0aW5nSG91cnNFbGVtZW50ID0gY3JlYXRlT3BlcmF0aW5nSG91cnNFbGVtZW50KGRheXMsIHRpbWVzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wZXJhdGluZ0hvdXJzRWxlbWVudChkYXlzLCB0aW1lcykge1xuICAgICAgICBjb25zdCBvcGVyYXRpbmdIb3Vyc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wZXJhdGluZy1ob3VycycpO1xuICAgICAgICBvcGVyYXRpbmdIb3Vyc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1ibG9jaycpOyAgICBcblxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPcGVuaW5nIEhvdXJzJztcbiAgICAgICAgb3BlcmF0aW5nSG91cnNFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRheXNMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXlzTGluZS50ZXh0Q29udGVudCA9IGRheXM7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzRWxlbWVudC5hcHBlbmRDaGlsZChkYXlzTGluZSk7XG5cbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhvdXJzLnRleHRDb250ZW50ID0gdGltZXM7XG4gICAgICAgIG9wZXJhdGluZ0hvdXJzRWxlbWVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAgICAgcmV0dXJuIG9wZXJhdGluZ0hvdXJzRWxlbWVudDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0T3BlcmF0aW5nSG91cnNFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gb3BlcmF0aW5nSG91cnNFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9wZXJhdGluZ0hvdXJzRWxlbWVudCxcbiAgICB9XG59XG5cbmNvbnN0IFBob25lTnVtYmVyID0gKHBob25lTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcGhvbmVOdW1iZXJFbGVtZW50ID0gY3JlYXRlUGhvbmVOdW1iZXJFbGVtZW50KHBob25lTnVtYmVyKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtYmVyRWxlbWVudChwaG9uZU51bWJlcikge1xuICAgICAgICBjb25zdCBwaG9uZU51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHBob25lTnVtYmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lLW51bWJlcicpO1xuICAgICAgICBwaG9uZU51bWJlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5mby1ibG9jaycpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1Bob25lJztcbiAgICAgICAgcGhvbmVOdW1iZXJFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gcGhvbmVOdW1iZXI7XG4gICAgICAgIHBob25lTnVtYmVyRWxlbWVudC5hcHBlbmRDaGlsZChudW1iZXIpOyAgICBcblxuICAgICAgICByZXR1cm4gcGhvbmVOdW1iZXJFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldFBob25lTnVtYmVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBob25lTnVtYmVyRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQaG9uZU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBob25lTnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBob25lTnVtYmVyLFxuICAgICAgICBnZXRQaG9uZU51bWJlckVsZW1lbnQsXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9