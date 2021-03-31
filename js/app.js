//Selects all button tag and store in a buttons variable
let buttons = document.querySelectorAll('button');

//select display class and store in a display variable 
let display = document.querySelector('.display');

// Calculate function
function calculate(event) {
    let clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C'){
        //clear everything on display
        display.value = '';
    } else {
        //otherwise concatenate it to display
        display.value += clickedButtonValue;
    }
}

// Add an event listener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});