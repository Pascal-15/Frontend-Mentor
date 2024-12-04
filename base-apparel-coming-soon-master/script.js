const form = document.querySelector('form[name="form"]');
const errorMessage = document.getElementById('errorMessage');
const inputContainer = document.getElementById('inputDiv');

form.addEventListener('submit', (e) => {
    console.log('Senden...')
    console.log(e);
    return validate(e);
});

function validate(e) {
    if (form.email.value == '') {
        console.log('Email fehlt...');
        form.errorLogo.style.display = 'block';  
        errorMessage.style.display = 'block';
        inputContainer.style.border = '1px solid red';
        form.email.focus();
        e.preventDefault();
        return false;
    }
    return true;
}