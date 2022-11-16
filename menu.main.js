/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/penne.jpeg":
/*!************************!*\
  !*** ./src/penne.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3c85bb47d79224bab01.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penne.jpeg */ "./src/penne.jpeg");


function menuPage() {
    const menuPage = document.createElement('section');
    menuPage.setAttribute('id', 'menu-page');
    menuPage.classList.add('page-width');
    menuPage.classList.add('page');

    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    header.appendChild(heading);
    menuPage.appendChild(header);

    const main = document.createElement('main');
    menuPage.appendChild(main);

    const menuItem = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem.getMenuItemElement());

    const menuItem2 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem2.getMenuItemElement());

    const menuItem3 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem3.getMenuItemElement());

    const menuItem4 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem4.getMenuItemElement());

    const menuItem5 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
    main.appendChild(menuItem5.getMenuItemElement());

    const menuItem6 = MenuItem('Penne with tomato meat bolognese sauce and basil', '$12.50', _penne_jpeg__WEBPACK_IMPORTED_MODULE_0__);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDOztBQUV2QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0RkFBNEYsd0NBQVU7QUFDdEc7O0FBRUEsNkZBQTZGLHdDQUFVO0FBQ3ZHOztBQUVBLDZGQUE2Rix3Q0FBVTtBQUN2Rzs7QUFFQSw2RkFBNkYsd0NBQVU7QUFDdkc7O0FBRUEsNkZBQTZGLHdDQUFVO0FBQ3ZHOztBQUVBLDZGQUE2Rix3Q0FBVTtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHBhc3RhSW1hZ2UgZnJvbSAnLi9wZW5uZS5qcGVnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgY29uc3QgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbWVudVBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXBhZ2UnKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlLXdpZHRoJyk7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBtZW51SXRlbSA9IE1lbnVJdGVtKCdQZW5uZSB3aXRoIHRvbWF0byBtZWF0IGJvbG9nbmVzZSBzYXVjZSBhbmQgYmFzaWwnLCAnJDEyLjUwJywgcGFzdGFJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbS5nZXRNZW51SXRlbUVsZW1lbnQoKSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTIgPSBNZW51SXRlbSgnUGVubmUgd2l0aCB0b21hdG8gbWVhdCBib2xvZ25lc2Ugc2F1Y2UgYW5kIGJhc2lsJywgJyQxMi41MCcsIHBhc3RhSW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW0yLmdldE1lbnVJdGVtRWxlbWVudCgpKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IE1lbnVJdGVtKCdQZW5uZSB3aXRoIHRvbWF0byBtZWF0IGJvbG9nbmVzZSBzYXVjZSBhbmQgYmFzaWwnLCAnJDEyLjUwJywgcGFzdGFJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbTMuZ2V0TWVudUl0ZW1FbGVtZW50KCkpO1xuXG4gICAgY29uc3QgbWVudUl0ZW00ID0gTWVudUl0ZW0oJ1Blbm5lIHdpdGggdG9tYXRvIG1lYXQgYm9sb2duZXNlIHNhdWNlIGFuZCBiYXNpbCcsICckMTIuNTAnLCBwYXN0YUltYWdlKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtNC5nZXRNZW51SXRlbUVsZW1lbnQoKSk7XG5cbiAgICBjb25zdCBtZW51SXRlbTUgPSBNZW51SXRlbSgnUGVubmUgd2l0aCB0b21hdG8gbWVhdCBib2xvZ25lc2Ugc2F1Y2UgYW5kIGJhc2lsJywgJyQxMi41MCcsIHBhc3RhSW1hZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW01LmdldE1lbnVJdGVtRWxlbWVudCgpKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtNiA9IE1lbnVJdGVtKCdQZW5uZSB3aXRoIHRvbWF0byBtZWF0IGJvbG9nbmVzZSBzYXVjZSBhbmQgYmFzaWwnLCAnJDEyLjUwJywgcGFzdGFJbWFnZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbTYuZ2V0TWVudUl0ZW1FbGVtZW50KCkpO1xuICAgIHJldHVybiBtZW51UGFnZTtcbn1cblxuY29uc3QgTWVudUl0ZW0gPSAobmFtZSwgcHJpY2UsIGltYWdlU3JjKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1FbGVtZW50ID0gY3JlYXRlTWVudUl0ZW1FbGVtZW50KG5hbWUsIHByaWNlLCBpbWFnZVNyYyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbUVsZW1lbnQobmFtZSwgcHJpY2UsIGltYWdlU3JjKSB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgbWVudUl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VTcmM7XG4gICAgICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgICAgIG1lbnVJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtUHJpY2UpOyAgICBcblxuICAgICAgICByZXR1cm4gbWVudUl0ZW1FbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByaWNlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW1nU3JjID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW1hZ2VTcmM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TWVudUl0ZW1FbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWVudUl0ZW1FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE5hbWUsXG4gICAgICAgIGdldFByaWNlLFxuICAgICAgICBnZXRJbWdTcmMsXG4gICAgICAgIGdldE1lbnVJdGVtRWxlbWVudCxcbiAgICB9XG59IFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=