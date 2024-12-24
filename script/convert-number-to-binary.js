var clipBoardTranslation = [];

const btn_translate = document.getElementById('btn_translate').addEventListener('click', () => {
    //cacth up the components like the input box, the local of message errors and the local of the result
    let input_number = document.getElementById('input_number').value;
    let error_message = document.getElementById('error_message');
    let result = document.getElementById('result');

    if(input_number == "") {
        error_message.hidden = false;
        error_message.innerText = "input empty!";
    } else {
        error_message.hidden = true;
        numberToBinary(input_number); 
    }
});

const copy_button = document.getElementById('copy_button').addEventListener('click', () => {
    navigator.clipboard.writeText(clipBoardTranslation.join('')).then(() => {
        alert('Copied')
    });
});

const paste_button = document.getElementById('paste_button').addEventListener('click', async () => {
    const pasteBinary = await navigator.clipboard.readText();
    document.getElementById('input_number').value = pasteBinary;
});

function numberToBinary(number) {
    result.innerText = "";
    
    //i formatted to the min of units be 8 
    //like 0 is 0 so i added more seven 0
    //same to 1 and the other numbers
    if(number == 0) { //if number is equal to 0 just return the number because 0 in binary is 0
        let translation = "";
        translation = String(number); 
        result.innerHTML = `${number} = ${translation}`;
    } else if(number == 1) { //if number is equal to 1 just return the number because 1 in binary is 1
        let translation = "";
        translation = String(number); 
        result.innerHTML = `${number} = ${translation}`;
    } else {
        const operation = { //create an object to helps in the conversion
            numberDivided: number,
            divider: 2,
            divisionResult: 0,
            translation: []
        };

        while(operation.divisionResult != 1) { //it is a formule let me give an example
            //2 in binary is made by number 2 divided by 2 (binary) and the rest of the operation will be the part of the binary form
            //2/2 = (result of division = 1) (rest of division = 0) so we need to reverse it 01 is the correct answer
            //for number that is greater is more complexity it will divide until the result of division be the same as the example above and after that does the same and reverse 
            operation.divisionResult = Math.floor(operation.numberDivided / operation.divider);
            operation.translation.push(String(operation.numberDivided % operation.divider));
            operation.numberDivided = operation.divisionResult;
        }

        operation.translation.push(String(operation.divisionResult)); //add the final result of operation for translation
        operation.translation.reverse(); //reverse function

        clipBoardTranslation = operation.translation;

        result.innerHTML = `${number} = ${operation.translation.join('')}`;//this join function is used to takes off the comma between each value in the array
    }
}