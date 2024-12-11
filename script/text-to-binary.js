const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => {
    let input_text = document.getElementById('input_text').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(!input_text) {
        error_message.hidden = false;
        error_message.innerText = "try typing something";
    } else {
        error_message.hidden = true;
        textToBinary(input_text.toUpperCase());
    }
});

function textToBinary(text) {
    let translation = "";

    let alphabet = [[
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ], [
        "01000001", "01000010", "01000011", "01000100", "01000101", "01000110", "01000111", "01001000", "01001001", "01001010", "01001011", "01001100", "01001101", "01001110", "01001111", "01010000", "01010001", "01010010", "01010011", "01010100", "01010101", "01010110", "01010111", "01011000", "01011001", "01011010"
    ]];

    let space = "00100000";

    result.innerText = "";

    for(let i = 0; i < text.length; i++) {
        for(let j = 0; j < 26; j++) {
            if(text[i] == alphabet[0][j]) {
                translation = alphabet[1][j];
                result.innerHTML += `${text[i]} = ${translation}`;
                result.innerHTML += "<br>";
            } else if(text[i] == " ") {
                translation = space;
                result.innerHTML += `SPACE = ${translation}`;
                result.innerHTML += "<br>";
                break;
            }
        }
    }
}