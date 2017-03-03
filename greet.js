function greetMe() {
    'use strict';
    var x = document.getElementById('TextBox').value;
    document.getElementById('output').innerHTML = 'Hello, ' + x;
}