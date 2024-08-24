// ==UserScript==
// @name         Auto Click on Grass Dashboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically clicks the element with class "chakra-icon css-w3c4vt" on Grass dashboard
// @author       JAMBAL
// @match        https://app.getgrass.io/dashboard
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const clickInterval = 5000; // Set to 0 to disable clicking (15000 milliseconds = 15 seconds)
    const reloadInterval = 7200000; // Set to 0 to disable reloading (3600000 milliseconds = 1 hour)
    function clickButton() {
        const button = document.querySelector('button.chakra-button.css-1wrvozo');
        if (button) {
            button.click();
            console.log('clicked!');
        } else {
            console.log('not found.');
        }
    }
    function reloadPage() {
        location.reload();
    }
    window.addEventListener('load', function() {
        // Set interval to click the button if clickInterval is not 0
        if (clickInterval > 0) {
            setInterval(clickButton, clickInterval);
        }
        // Set interval to reload the page if reloadInterval is not 0
        if (reloadInterval > 0) {
            setInterval(reloadPage, reloadInterval);
        }
    });

})();
