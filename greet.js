//Global variable that will be used to count number of clicks on button
var clickCount = Number(localStorage.getItem('currentGreets'));
document.getElementById('greetCount').innerHTML = 'Greets: ' + clickCount;

var namesGreeted = {};

for (var i = 0; i < namesGreeted.length; i++) {  
        }

//function that will be called on my button
function myName() {
    'use strict';
    //variable that gives value of what is in the TextBox
    var xxx = document.getElementById('TextBox').value;
    //if the English radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Hello + value in TextBox...
    if (document.getElementById('English').checked === true && xxx.length > 0 && namesGreeted[xxx] === undefined) {
        namesGreeted[xxx] = 1;
        document.getElementById('output').innerHTML = 'Hello, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    //if the isiXhosa radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Molo + value in TextBox...
    } else if (document.getElementById('isiXhosa').checked === true && xxx.length > 0 && namesGreeted[xxx] === undefined) {
        namesGreeted[xxx] = 1;
        document.getElementById('output').innerHTML = 'Molo, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    //if the Latin radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Salve + value in TextBox... 
    } else if (document.getElementById('Latin').checked === true && xxx.length > 0 && namesGreeted[xxx] === undefined) {
        namesGreeted[xxx] = 1;
        document.getElementById('output').innerHTML = 'Salve, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    } else if (document.getElementById('English').checked && xxx.length > 0 && namesGreeted[xxx] !== undefined) {
        document.getElementById('output').innerHTML = 'Hello, ' + xxx;
    } else if (document.getElementById('isiXhosa').checked && xxx.length > 0 && namesGreeted[xxx] !== undefined) {
        document.getElementById('output').innerHTML = 'Molo, ' + xxx;
    } else if (document.getElementById('Latin').checked && xxx.length > 0 && namesGreeted[xxx] !== undefined) {
        document.getElementById('output').innerHTML = 'Salve, ' + xxx;
    }
    //when greet me button has been pressed, the TextBox Value should be blank therefore counter does not increament
    document.getElementById('TextBox').value = "";
    //Tracks and displays number of times the greet me button is clicked and returns 'Greets: + Number of times greeted'
    document.getElementById('greetCount').innerHTML = 'Greets: ' + clickCount;
    
    //locstor will store the current number of counts
    localStorage.setItem('currentGreets',  Number(clickCount));
}

function resetBtn() {
    'use strict';
    var rst = document.getElementById('clickCount');
    if (rst >= 0) {
        document.getElementById('greetCount').innerHTML = clickCount = 'Greets: ' + 0;
    }
    localStorage.clear();
}