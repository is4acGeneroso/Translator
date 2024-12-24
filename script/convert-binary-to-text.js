var clipBoardTranslation = []; 

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
});

const btn_copy = document.getElementById('copy_button').addEventListener('click', () => {
    if(clipBoardTranslation.length == 0) {
        alert("There's nothing to copy")
    } else {
        navigator.clipboard.writeText(clipBoardTranslation.join('')).then(() => {
            alert("Copied!");
        });
    }
}) 

const btn_paste = document.getElementById('paste_button').addEventListener('click', async () => {
    let pasteBinary = await navigator.clipboard.readText();
    document.getElementById('input_binary').value = pasteBinary;
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

    let binaryTools = { //it creates an object with turn as a member
        turn: [],
    };

    let byte = 0; //this var is used to make an amount of bit or a byte example: (11111111) eight numbers is equal to 8 bits and 8 bit is a byte

    //
    for(let bit = 0; bit < binary.length / 8; bit++) { //it counts how many bytes has in the input
        binaryTools.turn.push(binary.slice(byte, byte+8)); //and then assign them to the array
        byte += 8; //after that it will continue for the next byte 
    }

    //this logic is very simple im just comparing the byte which was typed to the byte who has the position in the object of a letter and then i show it 
    for(let i = 0; i < binary.length / 8; i++) {
        for(let j = 0; j < 26; j++) {        
            if(binaryTools.turn[i] == combinatios.binaryAlphabet[j]) { 
                translation = combinatios.textAlphabet[j]; 
                clipBoardTranslation.push(translation);
                result.innerHTML += `${binaryTools.turn[i]} = ${translation}`; 
                result.innerHTML += "<br>";
            } 
        }
    }
}