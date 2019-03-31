const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const webSite = document.getElementById('website');
const comment = document.getElementById('comment');

const submitForm = document.getElementById('submitForm');

const firstNamePass = document.getElementById('firstNamePass');
firstNamePass.style.display = 'none';
const firstNameEmpty = document.getElementById('firstNameEmpty');
firstNameEmpty.style.display = 'none';
const firstNameTooLong = document.getElementById('firstNameTooLong');
firstNameTooLong.style.display = 'none';

const lastNamePass = document.getElementById('lastNamePass');
lastNamePass.style.display = 'none';
const lastNameEmpty = document.getElementById('lastNameEmpty');
lastNameEmpty.style.display = 'none';
const lastNameTooLong = document.getElementById('lastNameTooLong');
lastNameTooLong.style.display = 'none';

// Email is Valid

const emailIsValid =  document.getElementById('emailIsValid');
emailIsValid.style.display = false;

const emailEmpty = document.getElementById('emailEmpty');
emailEmpty.style.display = 'none';

const emailIsNotValid = document.getElementById('emailIsNotValid');
emailIsNotValid.style.display = 'none';

const phoneIsValid =  document.getElementById('phoneIsValid');
phoneIsValid.style.display = false;

const phoneEmpty = document.getElementById('phoneEmpty');
phoneEmpty.style.display = 'none';

const webSiteIsNotValid = document.getElementById('webSiteIsNotValid');
webSiteIsNotValid.style.display = 'none';

const webSiteIsValid =  document.getElementById('webSiteIsValid');
webSiteIsValid.style.display = false;

const webSiteEmpty = document.getElementById('webSiteEmpty');
webSiteEmpty.style.display = 'none';

const commentTooLong = document.getElementById('commentTooLong');
commentTooLong.style.display = 'none';

const commentPass =  document.getElementById('commentPass');
commentPass.style.display = false;

const commentEmpty = document.getElementById('commentEmpty');
commentEmpty.style.display = 'none';


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function phoneNumber(phoneInput) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneInput.value.match(phoneno)) {
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }


  /*

  XXX-XXX-XXXX
XXX.XXX.XXXX
XXX XXX XXXX

  */

 function validateURL(textval) {
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}

submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(phone.value);
    console.log(website.value);
    console.log(comment.value);
    // firtstName  not empty, less than 100    

    if (firstName.value !== '' && firstName.value.length < 100) {
        firstNamePass.style.display = 'block';
        firstNameEmpty.style.display = 'none';
        firstNameTooLong.style.display = 'none';
    }

    if (firstName.value == '') {
        firstNameEmpty.style.display = 'block';
        firstNamePass.style.display = 'none';
    }

    if (firstName.value.length > 100) {
        firstNameTooLong.style.display = 'block';
        firstNamePass.style.display = 'none';
    }


    //last name not empty , less than 100

    if (lastName.value !== '' && lastName.value.length < 100) {
        lastNamePass.style.display = 'block';
        lastNameEmpty.style.display = 'none';
        lastNameTooLong.style.display = 'none';
    }

    if (lastName.value == '') {
        lastNameEmpty.style.display = 'block';
        lastNamePass.style.display = 'none';
    }

    if (lastName.value.length > 100) {
        lastNameTooLong.style.display = 'block';
        lastNamePass.style.display = 'none';
    }

    // email, must be valid email

    if(email.value.length == '' ) {
        emailEmpty.style.display = 'block';
        emailIsNotValid.style.display = 'block';
    }

    if(email.value.length > 0 ) {
        emailEmpty.style.display = 'none';

     var isValidEmail = validateEmail(email.value);
        console.log(isValidEmail);
        alert(isValidEmail);

        if(isValidEmail) {
            emailIsValid.style.display = 'block';
            emailIsNotValid.style.display = 'none';

        } else {
            emailIsValid.style.display = 'none';
            emailIsNotValid.style.display = 'block';
        }

        
    }
    
    // phone , must be valid phone

    if(phone.value.length == '' ) {
        phoneEmpty.style.display = 'block';
        phoneIsNotValid.style.display = 'block';
    }

    if(phone.value.length > 0) {
        phoneEmpty.style.display = 'none';

      var isPhoneNumberValid =  phoneNumber(phone);

      console.log(isPhoneNumberValid)

      if(isPhoneNumberValid) {
        phoneIsValid.style.display = 'block';
        phoneIsNotValid.style.display = 'none';

    } else {
        phoneIsValid.style.display = 'none';
        phoneIsNotValid.style.display = 'block';
    }


    }

    if(webSite.value.length == '' ) {
        webSiteEmpty.style.display = 'block';
        webSiteIsNotValid.style.display = 'block';
    }

    if(webSite.value.length > 0) {
        webSiteEmpty.style.display = 'none';

      var isWebSiteValid =  validateURL(webSite.value);

      console.log(isWebSiteValid)

      if(isWebSiteValid) {
        webSiteIsValid.style.display = 'block';
        webSiteIsNotValid.style.display = 'none';

    } else {
        webSiteIsValid.style.display = 'none';
        webSiteIsNotValid.style.display = 'block';
    }


    }

    if (comment.value !== '' && comment.value.length < 100) {
        commentPass.style.display = 'block';
        commentEmpty.style.display = 'none';
        commentTooLong.style.display = 'none';
    }

    if (comment.value == '') {
        commentEmpty.style.display = 'block';
        commentPass.style.display = 'none';
    }

    if (comment.value.length > 100) {
        commentTooLong.style.display = 'block';
        commentPass.style.display = 'none';
    }



    // website, must be valid website


    // comment , less than 500



})