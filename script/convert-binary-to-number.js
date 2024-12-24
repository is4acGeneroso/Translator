var translationClipBoard = [];

const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => {
    let input_binary = document.getElementById('input_binary').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(input_binary == "") {
        error_message.hidden = false;
        error_message.innerText = "input empty!";
    } else if(!validateZeroOne(input_binary)) {
        error_message.hidden = false;
        error_message.innerText = "don't forget, binary numbers are 0 and 1 ;)";
    } else {
        error_message.hidden = true;
        binaryToNumber(input_binary);
    }
});

const copy_button = document.getElementById('copy_button').addEventListener('click', () => {
    navigator.clipboard.writeText(translationClipBoard.join('')).then(() => {
        alert("Copied");
    } );
});

const paste_button = document.getElementById('paste_button').addEventListener('click', async () => {
    const pasteNumber = await navigator.clipboard.readText(translationClipBoard);
    document.getElementById('input_binary').value = pasteNumber;
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

function binaryToNumber(binary) {
    translateTools = {
        baseNumber: 2,
        powerNumber: 0,
        number: binary,
        translation: 0
    }

    let i = binary.length - 1;

    while(Math.floor(Math.pow(translateTools.baseNumber, translateTools.powerNumber)) <= translateTools.number && i > -1) {
        
        if(translateTools.number[i] == 1) {
            translateTools.translation += Math.pow(translateTools.baseNumber, translateTools.powerNumber);
        }
        
        translateTools.powerNumber++;
        i--;
    }

    translationClipBoard.push(translateTools.translation);

    result.innerHTML = `${binary} = ${translateTools.translation}`;
}