const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


checkNumber.addEventListener("click", checkBirthdateIsLucky)

function compareValues(sum, luckyNumber) {
    if (sum % Number(luckyNumber) === 0) {
        outputBox.innerHTML = "Your Birthday is lucky";
        return true

    } else {
        outputBox.innerHTML = "Your Birthday is unlucky";
        return true
    }
}

    function checkBirthdateIsLucky() {

        const dob = dateOfBirth.value
        const sum = calculateSum(dob)

        if(dob && luckyNumber.value){
            
            compareValues(sum, luckyNumber.value);
        } else {
            outputBox.innerHTML = "Please enter both inputs";
        }
    };

    function calculateSum(dob) {
        dob = dob.replaceAll("-", "")
        let sum = 0;
        for (let i = 0; i < dob.length; i++) {
            sum = sum + Number(dob[i]);
        }
        return sum;
    }