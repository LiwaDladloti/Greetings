//Global variable that will be used to count number of clicks on button
var clickCount = Number(localStorage.getItem('currentGreets'));
document.getElementById('greetCount').innerHTML = clickCount;

var namesGreeted = {};

for (var i = 0; i < namesGreeted.length; i++) {  
        }

//function that will be called on my button
function myName() {
//    'use strict';
//    //variable that gives value of what is in the TextBox
//    var textBox = document.getElementById('TextBox').value;
//    //if the English radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Hello + value in TextBox...
//    if (/*document.getElementById('English').checked === true && textBox.length > 0 &&*/ namesGreeted[textBox] === undefined) {
//        namesGreeted[textBox] = 1;
//        document.getElementById('output').innerHTML = 'Hello, ' + textBox;
//        //Then the clickCount should increament by 1 when button is pressed.
//        clickCount += 1;
//    //if the isiXhosa radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Molo + value in TextBox...
//    } else if (/*document.getElementById('isiXhosa').checked === true && textBox.length > 0 &&*/ namesGreeted[textBox] === undefined) {
//        namesGreeted[textBox] = 1;
//        document.getElementById('output').innerHTML = 'Molo, ' + textBox;
//        //Then the clickCount should increament by 1 when button is pressed.
//        clickCount += 1;
//    //if the Latin radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Salve + value in TextBox... 
//    } else if (/*document.getElementById('Latin').checked === true && textBox.length > 0 &&*/ namesGreeted[textBox] === undefined) {
//        namesGreeted[textBox] = 1;
//        document.getElementById('output').innerHTML = 'Salve, ' + textBox;
//        //Then the clickCount should increament by 1 when button is pressed.
//        clickCount += 1;
//    } else if (document.getElementById('English').checked && textBox.length > 0 && namesGreeted[textBox] !== undefined) {
//        document.getElementById('output').innerHTML = 'Hello, ' + textBox;
//    } else if (document.getElementById('isiXhosa').checked && textBox.length > 0 && namesGreeted[textBox] !== undefined) {
//        document.getElementById('output').innerHTML = 'Molo, ' + textBox;
//    } else if (document.getElementById('Latin').checked && textBox.length > 0 && namesGreeted[textBox] !== undefined) {
//        document.getElementById('output').innerHTML = 'Salve, ' + textBox;
//    }
//    //when greet me button has been pressed, the TextBox Value should be blank therefore counter does not increament
//    document.getElementById('TextBox').value = "";
//    //Tracks and displays number of times the greet me button is clicked and returns 'Greets: + Number of times greeted'
//    document.getElementById('greetCount').innerHTML = clickCount;
//    
//    //locstor will store the current number of counts
//    localStorage.setItem('currentGreets',  Number(clickCount));
    
    document.getElementById('output').innerHTML = radioCheck();
    
    
}

function resetBtn() {
    'use strict';
    var rst = document.getElementById('clickCount');
    if (rst >= 0) {
        document.getElementById('greetCount').innerHTML = clickCount = 0;
    }
    localStorage.clear();
}