//This function is suppose to return a greeting depending on the checked radio button
function langs() {
    'use strict';
    if (document.getElementById('English').checked) {
        return 'English';
    } else if (document.getElementById('isiXhosa').checked) {
        return 'isiXhosa';
    } else if (document.getElementById('Latin').checked) {
        return 'Latin'; 
    }
}

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