const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => { 
    let binary = document.getElementById('input_binary').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    binary
    ? (error_message.hidden = true, result.innerText = binaryToText(binary))
    : (error_message.hidden = false, error_message.innerText = "try typing something");
});

function binaryToText(binary) {
    let translation = "";
    let array = [];

    let alphabet = [[
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ], [
        "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010"
    ]];

    /*
    for(let i = 8; i < binary.length; i += 8) {

        for(let j = 0; j < 26; j++) {
            if(binary[i] == alphabet[1][j]) {
               translation += alphabet[0][j]; 
            }
        }
    }
    */

    return translation;
}