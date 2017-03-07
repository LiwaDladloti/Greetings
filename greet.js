function greetMe() {
    'use strict';
    //stores value in the TextBox
    var x = document.getElementById('TextBox').value;
    //Returns Hello + 'value in TextBox' and prints it in the 'output' id.
    document.getElementById('output').innerHTML = 'Hello, ' + x;
}

//Global variable that will be used to count number of clicks on button
var clickCount = Number(localStorage.clickCount);

//function that will be called on my button
function myName() {
    'use strict';
    //variable that gives value of what is in the TextBox
    var xxx = document.getElementById('TextBox').value;
    //if the English radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Hello + value in TextBox...
    if (document.getElementById('English').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Hello, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    //if the isiXhosa radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Molo + value in TextBox...
    } else if (document.getElementById('isiXhosa').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Molo, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    //if the Latin radio button is checked, and the value of TextBox is more than 0... In the output id, it should print Salve + value in TextBox... 
    } else if (document.getElementById('Latin').checked === true && xxx.length > 0) {
        document.getElementById('output').innerHTML = 'Salve, ' + xxx;
        //Then the clickCount should increament by 1 when button is pressed.
        clickCount += 1;
    }
    //when greet me button has been pressed, the TextBox Value should be blank therefore counter does not increament
    document.getElementById('TextBox').value = "";
    //Tracks and displays number of times the greet me button is clicked and returns 'Greets: + Number of times greeted'
    document.getElementById('greetCount').innerHTML = 'Greets: ' + clickCount;
    
    //localStorage--
    //tells it that the type of storage should not be undefind
    if (typeof (localStorage) !== 'undefined') {
    //sets 'clickCounts' variable to localStorage
        if (localStorage.clickCount && xxx.length > 0) {
    //if button is clicked, clickCounts increaments by 1
            localStorage.clickCount = Number(localStorage.clickCount) + 1;
        }
        document.getElementById('greetCount').innerHTML = 'Greets: ' + localStorage.clickCount;
    }
}
