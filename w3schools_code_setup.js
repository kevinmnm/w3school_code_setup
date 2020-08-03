// ==UserScript==
// @name         w3schools setup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.w3schools.com/*
// @grant        none
// ==/UserScript==

(function() {
    document.querySelector('.trytopnav').style.top = '0';
    document.querySelector('#container').style.top = '40px';
})();

document.body.addEventListener('keydown', function(event){
    let keyCode = event.keyCode;
    let key = event.key;
    if (key === 'Alt' && 's'){
        submitTryit(1);
        ga('send', 'event', 'runCode', 'click');
    }
});