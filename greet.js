/*function greetMe() {
    'use strict';
    var x = document.getElementById('TextBox').value;
    document.getElementById('output').innerHTML = 'Hello, ' + x;
}*/

function myName() {
    'use strict';
    var xxx = document.getElementById('TextBox').value;
    if (document.getElementById('English').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Hello, ' + xxx;
    } else if (document.getElementById('isiXhosa').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Molo, ' + xxx;
    } else if (document.getElementById('Latin').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Salve, ' + xxx;
    }
}