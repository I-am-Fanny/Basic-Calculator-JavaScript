/*1º:Listen when the html is loaded*/
window.addEventListener('load',()=>{
  /* Create two constant and save the elements to need*/
  //This variable select a button with the calculator-display class.
const display = document.querySelector('.calculator-display');
//This variable select all the button with the keypad-button class.
const keypadButtons = document.getElementsByClassName('keypad-button');

//convert the HTMLCollection to an Array
const keypadButtonsArray = Array.from(keypadButtons);

//Itarate through keypadButtonsArray with a For.Ecah()
keypadButtonsArray.forEach((button)=>{
  /*Each button receive a listener*/
  button.addEventListener('click', ()=>{
    /*All button call to theCalculator function*/
    theCalculator(button,display);
  })
})
});

/*2º: Declarate a 'theCalculator' function*/

function theCalculator(button,display){
  /*Create a switch to ask for button.innerHTML*/
  switch (button.innerHTML) {
    /*Create a specific function to drive each case */
    case 'C':
      erase(display);
      break;

      case '=':
        calculate(display);
        break;
  
    default:
      toUpDate(display,button);
      break;
  }

}

/*3º: Declarate a 'calculate' function that receive 'display' parameter*/
function calculate(display){
  /*Take the string, resolve it and store it in the innerHTML of the display */
  display.innerHTML = eval(display.innerHTML);
}

/*4º: Declarate a 'toUpDate' function to put the numbers in the display*/
function toUpDate(display,button){
  if(display.innerHTML == 0){
    display.innerHTML = '';
  }
  display.innerHTML += button.innerHTML;
}


/*5º: Declarate a 'erase' function to delete the calculation*/
function erase(display){
  display.innerHTML = 0;
}