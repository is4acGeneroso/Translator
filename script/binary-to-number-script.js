const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => {
    let input_binary = document.getElementById('input_binary').value;
    let error_message = document.getElementById('error_message');

    if(!input_binary) {
        error_message.hidden = false;
        error_message.innerText = "it needs to contains something to start"
    } else {
        error_message.hidden = true;
        binaryToNumber(input_binary);
    }
})

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

    console.log(translateTools.translation);
}