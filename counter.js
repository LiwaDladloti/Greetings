var uniqNames = {};

function greetCounter(firstName) {
    'use strict';
    var readStorage = localStorage.getItem('counter');
    
    if (uniqNames[firstName] === undefined) {
        localStorage['counter'] = parseInt(readStorage) + 1;
    }
    return readStorage;
}