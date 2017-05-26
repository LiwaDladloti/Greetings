function getName() {
    'use strict';
    var textBox = document.getElementById('TextBox').value;
    if (textBox.length > 0) {
        return textBox;
    }
}