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
/*!********************************!*\
  !*** ./src/site-components.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "NavBar": () => (/* binding */ NavBar),
/* harmony export */   "heroImageComponent": () => (/* binding */ heroImageComponent),
/* harmony export */   "quoteComponent": () => (/* binding */ quoteComponent)
/* harmony export */ });
function quoteComponent() {
    const quoteComponent = document.createElement('p');

    const quoteText = 'This restaurant is awesome!';

    quoteComponent.textContent = quoteText;

    return quoteComponent;
}

function heroImageComponent() {
    const heroImageComponent = document.createElement('img');

    const imgSrc = "../src/pasta.jpeg";

    heroImageComponent.setAttribute('src', imgSrc);

    return heroImageComponent;
}

const Footer = () => {
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

const Header = () => {
    const headerElement = createHeader();
    
    function createHeader() {
        const headerElement = document.createElement('header');
        
        const pageWidth = document.createElement('div');
        pageWidth.classList.add('page-width');
        pageWidth.setAttribute('id', 'header');
        headerElement.appendChild(pageWidth);

        const logo = Logo();
        pageWidth.appendChild(logo.getLogoElement());

        return headerElement;
    }

    const getHeaderElement = () => {
        return headerElement;
    }

    return {
        getHeaderElement,
    }
}

const NavBar = (...nodeNames) => {
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

const Logo = () => {
    const logoElement = createLogoElement();

    function createLogoElement() {
        const logoElement = document.createElement('div');
        logoElement.classList.add('logo');

        const logoTop = document.createElement('p');
        logoTop.classList.add('logo-top');
        logoTop.textContent = 'K';
        logoElement.appendChild(logoTop);

        const logoBottom = document.createElement('p');
        logoBottom.classList.add('logo-bottom');
        logoBottom.textContent = 'Kitchen';
        logoElement.appendChild(logoBottom);

        return logoElement;
    }

    const getLogoElement = () => {
        return logoElement;
    }

    return {
        getLogoElement,
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZUNvbXBvbmVudHMubWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NpdGUtY29tcG9uZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBxdW90ZUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBxdW90ZUNvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHF1b3RlVGV4dCA9ICdUaGlzIHJlc3RhdXJhbnQgaXMgYXdlc29tZSEnO1xuXG4gICAgcXVvdGVDb21wb25lbnQudGV4dENvbnRlbnQgPSBxdW90ZVRleHQ7XG5cbiAgICByZXR1cm4gcXVvdGVDb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJvSW1hZ2VDb21wb25lbnQoKSB7XG4gICAgY29uc3QgaGVyb0ltYWdlQ29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdCBpbWdTcmMgPSBcIi4uL3NyYy9wYXN0YS5qcGVnXCI7XG5cbiAgICBoZXJvSW1hZ2VDb21wb25lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWdTcmMpO1xuXG4gICAgcmV0dXJuIGhlcm9JbWFnZUNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gIGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBmb290ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICAgICAgY29uc3QgcGFnZVdpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VXaWR0aC5jbGFzc0xpc3QuYWRkKCdwYWdlLXdpZHRoJyk7XG4gICAgICAgIHBhZ2VXaWR0aC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VXaWR0aCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdXRob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb25zdCBsaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20va2VueWFjaGFuXCI7XG4gICAgICAgIGNvbnN0IGF1dGhvciA9IFwiS2VueWEgQ2hhblwiXG4gICAgICAgIGF1dGhvckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gICAgICAgIGF1dGhvckxpbmsudGV4dENvbnRlbnQgPSBhdXRob3I7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhdXRob3JQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhdXRob3JQLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IFwiO1xuICAgICAgICBhdXRob3JQLmFwcGVuZENoaWxkKGF1dGhvckxpbmspO1xuICAgICAgICBcbiAgICAgICAgcGFnZVdpZHRoLmFwcGVuZENoaWxkKGF1dGhvclApOyAgICBcbiAgICBcbiAgICAgICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Rm9vdGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvb3RlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Rm9vdGVyRWxlbWVudCxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGFnZVdpZHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VXaWR0aC5jbGFzc0xpc3QuYWRkKCdwYWdlLXdpZHRoJyk7XG4gICAgICAgIHBhZ2VXaWR0aC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhZ2VXaWR0aCk7XG5cbiAgICAgICAgY29uc3QgbG9nbyA9IExvZ28oKTtcbiAgICAgICAgcGFnZVdpZHRoLmFwcGVuZENoaWxkKGxvZ28uZ2V0TG9nb0VsZW1lbnQoKSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGVhZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SGVhZGVyRWxlbWVudCxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBOYXZCYXIgPSAoLi4ubm9kZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgbmF2TGlua3MgPSBbXTtcbiAgICBjb25zdCBuYXZCYXJFbGVtZW50ID0gY3JlYXRlTmF2RWxlbWVudCgpO1xuXG4gICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0TGlua0FjdGl2ZShldmVudC50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldExpbmtBY3RpdmUobGluaykge1xuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXZFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG4gICAgICAgIG5vZGVOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5hdkxpbmsobmFtZSk7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuYXZiYXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTmF2TGluayhuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBuYXZMaW5rLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgbmF2TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcbiAgICAgICAgbmF2TGlua3MucHVzaChuYXZMaW5rKTtcblxuICAgICAgICByZXR1cm4gbGlzdEl0ZW07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmF2QmFyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5hdkJhckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmF2TGlua3MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYXZMaW5rcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXROYXZCYXJFbGVtZW50LCBcbiAgICAgICAgZ2V0TmF2TGlua3MsXG4gICAgfSAgXG59XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ29FbGVtZW50ID0gY3JlYXRlTG9nb0VsZW1lbnQoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvZ29FbGVtZW50KCkge1xuICAgICAgICBjb25zdCBsb2dvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dvRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICAgICAgY29uc3QgbG9nb1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbG9nb1RvcC5jbGFzc0xpc3QuYWRkKCdsb2dvLXRvcCcpO1xuICAgICAgICBsb2dvVG9wLnRleHRDb250ZW50ID0gJ0snO1xuICAgICAgICBsb2dvRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvVG9wKTtcblxuICAgICAgICBjb25zdCBsb2dvQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsb2dvQm90dG9tLmNsYXNzTGlzdC5hZGQoJ2xvZ28tYm90dG9tJyk7XG4gICAgICAgIGxvZ29Cb3R0b20udGV4dENvbnRlbnQgPSAnS2l0Y2hlbic7XG4gICAgICAgIGxvZ29FbGVtZW50LmFwcGVuZENoaWxkKGxvZ29Cb3R0b20pO1xuXG4gICAgICAgIHJldHVybiBsb2dvRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMb2dvRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxvZ29FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExvZ29FbGVtZW50LFxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==