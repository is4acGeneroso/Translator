const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => { 
    let binary = document.getElementById('input_binary').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(!binary) {
        error_message.hidden = false;
        error_message.innerText = "try typing something";
    } else if(binary.length < 8) {
        error_message.hidden = false;
        error_message.innerText = "binary numbers should has at least 8 characteres"
    } else if(!validateZeroOne(binary)) {
        error_message.hidden = false;
        error_message.innerText = "don't forget, binary numbers are 0 and 1 ;)"; 
    } else {
        binaryToText(binary);
    }

});

function validateZeroOne(binary) {
    for(let i = 0; i < binary.length; i++) {
        if(binary[i] != 0 && binary[i] != 1) {
            return false;
        } 
    }
    
    return true;
}


function binaryToText(binary) {
    let translation = "";

    let alphabet = [[
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ], [
        "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010"
    ]];

    let space = "00100000";

    result.innerText = "";

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

    //let binaryArrayLength = binaryArray.length;

        
}