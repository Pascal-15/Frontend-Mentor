const form = document.getElementById('form');

const cGeneral = document.getElementById('cGeneral');
const cSupport = document.getElementById('cSupport');
const generalRadio = document.getElementById('general');
const supportRadio = document.getElementById('support');
const btnSubmit = document.getElementById('btn-submit');
const cSuccess =  document.getElementById('cSuccess');

//error messages
const errorFirstName = document.getElementById('errorFirstName');
const errorLastName = document.getElementById('rrorLastName');
const errorEmail = document.getElementById('errorEmail');
const errorQuery = document.getElementById('errorQuery');
const errorMessage = document.getElementById('errorMessage');
const errorCheck = document.getElementById('errorCheck');


//get custom colors from stylesheet
const rootColors = getComputedStyle(document.documentElement);
const green = rootColors.getPropertyValue('--Green').trim();
const greenDark = rootColors.getPropertyValue('--GreenDark').trim();

//radios/radio(div) event handling
generalRadio.addEventListener('change', () => {
    if (generalRadio.checked == true) {
        cGeneral.style.backgroundColor = green;
        cGeneral.style.borderColor = greenDark;
        cSupport.style.backgroundColor = '';
        cSupport.style.borderColor = '';
    }
});
supportRadio.addEventListener('change', () => {
    if (supportRadio.checked == true) {
        cSupport.style.backgroundColor = green;
        cSupport.style.borderColor = greenDark;
        cGeneral.style.backgroundColor = '';
        cGeneral.style.borderColor = '';
    }
});
cGeneral.addEventListener('click', () => {
    generalRadio.checked = true;
    generalRadio.dispatchEvent(new Event('change'));
})
cSupport.addEventListener('click', () => {
    supportRadio.checked = true;
    supportRadio.dispatchEvent(new Event('change'));
})




//Form success & error state handling

//Show error messages under input fields
const showErrorMessages = (input, message) => {
    const element = document.getElementById(`${input.id}-error`);
    if (element) {
        element.removeAttribute('hidden');
        element.innerText = message;
        input.setAttribute('true');
    }
};



btnSubmit.onclick = () => {
    let errorCounter = 0;
    for(let field of form.elements) {
        let valid = field.validity.valid;
        if (valid) {
            continue;
        }
        showErrorMessages(field);
        errorCounter++;
    }
    if (!errorCounter) {
        clearErrorMessages()
    }

    //
}