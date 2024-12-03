const form = document.form;

form.onSubmit = (e) => {
    e.preventDefault();
    console.log('Senden...');
    console.log(e);

    return validate();
}


function validate() {
    if (form.email.value = '') {
        console.log('Email fehlt...');
        form.email.focus();
        return false;
    }
    return true;
}


/* 
<button>
          <img src="images/icon-arrow.svg" alt="">
        </button>
*/