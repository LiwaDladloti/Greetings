var counter = 0;
var uniqNames = {};

function greetCounter(firstName) {
    'use strict';
	
    if (uniqNames[firstName] === undefined) {
        // add them into uniqNames... ?
        uniqNames[firstName] = 1;
        counter ++; 
        localStorage['counter'] = counter;
    }
    var value = uniqNames[firstName];
    return value;
}