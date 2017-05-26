//This function is suppose to return a greeting depending on the checked radio button
function radioCheck(name, language) {
    'use strict';
    if (language === 'English') {
        return 'Hello, ' + name;
    } else if (language === 'isiXhosa') {
        return 'Molo, ' + name;
    } else if (language === 'Latin') {
        return 'Salve, ' + name;
    } 
}