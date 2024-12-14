//add an event to call the main function when its clicked
const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => {
    //cacth up the components like the input box, the local of message errors and the local of the result
    let input_text = document.getElementById('input_text').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(!input_text) { //if the box is empty
        //show the error
        error_message.hidden = false;
        error_message.innerText = "it should has at least one letter";
    } else { //if its not empty
        //hidden the error and call a function passing by the parameter what was typed with upper case form
        error_message.hidden = true;
        textToBinary(input_text.toUpperCase());
    }
});

function textToBinary(text) {
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

    for(let i = 0; i < text.length; i++) { //it runs all letters in the phrase or word
        for(let j = 0; j < 26; j++) { //and each time does the comparation with each other
            if(text[i] == combinatios.textAlphabet[j]) { //ill give an example: if a letter of the word is equal to the letter of the combination 
                translation = combinatios.binaryAlphabet[j]; //then it does the translation because it already found the correct position
                result.innerHTML += `${text[i]} = ${translation}`; //show the translation of the letter with its original form
                result.innerHTML += "<br>";
            } else if(text[i] == " ") { //in case that word got spaces 
                translation = combinatios.space; //just assign the space in its binary form
                result.innerHTML += `SPACE = ${translation}`; //show the translation as well
                result.innerHTML += "<br>";
                break;
            }
        }
    }
}