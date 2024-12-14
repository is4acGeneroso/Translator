const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => { 
    //cacth up the components like the input box, the local of message errors and the local of the result
    let input_binary = document.getElementById('input_binary').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(!input_binary) { //if the box is empty
        //show the error
        error_message.hidden = false;
        error_message.innerText = "input empty!";
    } else if(input_binary.length < 8) { //if the input has less than 8 units its not considered valid
        //show the error
        error_message.hidden = false;
        error_message.innerText = "it should has at least eight units"
    } else if(!validateZeroOne(input_binary)) { //if the result of this function be false it'll throw an error
        error_message.hidden = false;
        error_message.innerText = "don't forget, binary numbers are 0 and 1 ;)"; 
    } else {
        //hidden the error and call a function passing by the parameter what was typed 
        error_message.hidden = true;
        binaryToText(input_binary);
    }
        /*else {
        binaryToText(input_binary);
    }*/

});

function validateZeroOne(binary) { //this simple function has the purpose the check if each number typed is different of 0 and 1 
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] != 0 && binary[i] != 1) {
            //if it is different return false
            return false;
        } 
    }
    
    //if the group of numbers only has 0 and 1 return true 
    return true;
}

function binaryToText(binary) {
    result.innerText = ""; //it sets the local's result message as empty 
    let translation = ""; //the result will be assign in this local variable

    //combinations is the object that contains the alphabet in binary and stand one, space in addition
    let combinatios = {
        textAlphabet: [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ],
        binaryAlphabet: [
            "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010"
        ],
        space: "00100000" 
    };

    let binaryTools = {
        turn: [[], []],
        savedLength: binary.length
    };

    for(let i = 0; i < binary.length; i++) {
        for() {
            
        }
    }
}

/*            
    let binaryLetter = "";
    let quantitiesOfChar = binary.length; 

    for(let i = 0; i < binary.length; i++) {
        binaryLetter += binary[i]; 
        }

    while(quantitiesOfChar > 7) {
    for(let i = 0; i < binary.length; i++) {
    for(let j = 0; j < binary.length; j++) {
        if(binaryLetter[]) {

        }
    }
    }
    quantitiesOfChar -= 8;
    }

    let binaryArrayLength = binaryArray.length;       
*/