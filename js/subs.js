//Subscribe button link
function redirect(){
  window.location.href = "./subscription.html";
}

//Var declarations
var correctSubmitText = "";
var incorrectSubmitText = "";
var totValidation = [];
var fullname = document.querySelector('input[id="fullname"]');
var email = document.querySelector('input[id="email"]');
var password = document.querySelector('input[id="password"]');
var repeatPassword = document.querySelector('input[id="repeat-password"]');
var age = document.querySelector('input[id="age"]');
var phoneNumber = document.querySelector('input[id="phone-number"]');
var adress = document.querySelector('input[id="adress"]');
var city = document.querySelector('input[id="city"]');
var postalCode = document.querySelector('input[id="postal-code"]');
var dni = document.querySelector('input[id="dni"]');

//totValidation initialization
var i;
for (i = 0; i < 10; i++){
  totValidation.push(false);
}


//Fullname validation
function validFullname(){
  var valueFullname = fullname.value;
  if (valueFullname.indexOf(" ") == -1 || valueFullname.indexOf(" ") == 0 || valueFullname.replace(/\s/g, "").length <= 6) {
    fullname.nextElementSibling.classList.add("show-error");
    totValidation[0] = false;
  } else {
    totValidation[0] = true;
    return valueFullname;
  }
}

fullname.onblur = function val(){
  validFullname();
}

fullname.onfocus = function delError(){
  fullname.nextElementSibling.classList.remove("show-error");
}

//Email validation
function validEmail(){
  var valueEmail = email.value;
  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valueEmail))) {
    email.nextElementSibling.classList.add("show-error");
    totValidation[1] = false;
  } else {
    totValidation[1] = true;
    return valueEmail;
  }
}

email.onblur = function val(){
  validEmail();
}

email.onfocus = function delError(){
  email.nextElementSibling.classList.remove("show-error");
}

//Password validation
function validPassword(){
  var valuePassword = password.value;
  if (!(valuePassword.match(/[a-zA-Z]/g) && valuePassword.match(/[0-9]/g) && !(valuePassword.match(/[.!#$%&'*+/=?^_`{|}~-]/g)) &&
  valuePassword.length >= 8)) {
    password.nextElementSibling.classList.add("show-error");
    totValidation[2] = false;
  } else {
    totValidation[2] = true;
    return valuePassword;
  }
}

password.onblur = function val(){
  validPassword();
}

password.onfocus = function delError(){
  password.nextElementSibling.classList.remove("show-error");
}

//Repeat password validation
function validRepeatPassword(){
  var valueRepeatPassword = repeatPassword.value;
  if (!(valueRepeatPassword == validPassword())){
    repeatPassword.nextElementSibling.classList.add("show-error");
    totValidation[3] = false;
  } else {
    totValidation[3] = true;
    return valueRepeatPassword;
  }
}

repeatPassword.onblur = function val(){
  validRepeatPassword();
}

repeatPassword.onfocus = function delError(){
  repeatPassword.nextElementSibling.classList.remove("show-error");
}

//Age validation
function validAge(){
  var valueAge = age.value;
  if (!((valueAge>=18) && (valueAge%1==0))) {
    age.nextElementSibling.classList.add("show-error");
    totValidation[4] = false;
  } else {
    totValidation[4] = true;
    return valueAge;
  }
}

age.onblur = function val(){
  validAge();
}

age.onfocus = function delError(){
  age.nextElementSibling.classList.remove("show-error");
}

//Phone number validation
function validPhoneNumber(){
  var valuePhoneNumber = phoneNumber.value;
  if (!(/^[0-9]+$/.test(valuePhoneNumber)) || !(valuePhoneNumber.length >= 7)) {
    phoneNumber.nextElementSibling.classList.add("show-error");
    totValidation[5] = false;
  } else {
    totValidation[5] = true;
    return valuePhoneNumber;
  }
}

phoneNumber.onblur = function val(){
  validPhoneNumber();
}

phoneNumber.onfocus = function delError(){
  phoneNumber.nextElementSibling.classList.remove("show-error");
}

//Adress validation
function validAdress(){
  var valueAdress = adress.value;
  if (valueAdress.indexOf(" ") == -1 || valueAdress.indexOf(" ") == 0 || valueAdress.replace(/\s/g, "").length <= 4
  || !(valueAdress.match(/[a-zA-Z]/g)) || !(valueAdress.match(/[0-9]/g))) {
    adress.nextElementSibling.classList.add("show-error");
    totValidation[6] = false;
  } else {
    totValidation[6] = true;
    return valueAdress;
  }
}

adress.onblur = function val(){
  validAdress();
}

adress.onfocus = function delError(){
  adress.nextElementSibling.classList.remove("show-error");
}

//City validation
function validCity(){
  var valueCity = city.value;
  if (valueCity.length < 3) {
    city.nextElementSibling.classList.add("show-error");
    totValidation[7] = false;
  } else {
    totValidation[7] = true;
    return valueCity;
  }
}

city.onblur = function val(){
  validCity();
}

city.onfocus = function delError(){
  city.nextElementSibling.classList.remove("show-error");
}

//Postal code validation
function validPostalCode(){
  var valuePostalCode = postalCode.value;
  if (valuePostalCode.length < 3) {
    postalCode.nextElementSibling.classList.add("show-error");
    totValidation[8] = false;
  } else {
    totValidation[8] = true;
    return valuePostalCode;
  }
}

postalCode.onblur = function val(){
  validPostalCode();
}

postalCode.onfocus = function delError(){
  postalCode.nextElementSibling.classList.remove("show-error");
}

//DNI validation
function validDni(){
  var valueDni = dni.value;
  if (!(/^[0-9]+$/.test(valueDni)) || !(valueDni.length >= 7) || !(valueDni.length <= 8)) {
    dni.nextElementSibling.classList.add("show-error");
    totValidation[9] = false;
  } else {
    totValidation[9] = true;
    return valueDni;
  }
}

dni.onblur = function val(){
  validDni();
}

dni.onfocus = function delError(){
  dni.nextElementSibling.classList.remove("show-error");
}

//Submit validation, error alert creation
function handleSubmit(e){
  e.preventDefault();
  correctSubmitText = "";
  incorrectSubmitText = "";
  var valResult = true;
  for (i = 0; i < 10; i++){
    valResult *= totValidation[i];
  }
  if (valResult){
    correctSubmitText = "Congratulations! Now you are subscribed to Rosario Herald:\n\n"+
    "Full name: " + validFullname() + "\n" +
    "Email: " + validEmail() + "\n" +
    "Password: " + validPassword() + "\n" +
    "Age: " + validAge() + "\n" +
    "Phone number: " + validPhoneNumber() + "\n" +
    "Adress: " + validAdress() + "\n" +
    "City: " + validCity() + "\n" +
    "Postal code: " + validPostalCode() + "\n" +
    "DNI: " + validDni() + "\n";
    alert(correctSubmitText);
  } else {
      incorrectSubmitText = "There are errors on the form. Please fix them before continuing:\n\n";
      if (!(totValidation[0])){
        incorrectSubmitText += "Use 7 characters or more with at least 1 space between first and last name.\n\n";
      }
      if (!(totValidation[1])){
        incorrectSubmitText += "Please enter a valid email adress.\n\n";
      }
      if (!(totValidation[2])){
        incorrectSubmitText += "Please enter a valid password.\n\n";
      }
      if (!(totValidation[3])){
        incorrectSubmitText += "Passwords doesn't match, please submit again.\n\n";
      }
      if (!(totValidation[4])){
        incorrectSubmitText += "Age must be an integer equal to or greater than 18.\n\n";
      }
      if (!(totValidation[5])){
        incorrectSubmitText += "Please enter a valid phone number: at least 7 digits, without spaces, hyphens or parenthesis.\n\n";
      }
      if (!(totValidation[6])){
        incorrectSubmitText += "Please enter a valid adress: numbers and letters, 5 characters or more, with at least 1 space between words.\n\n";
      }
      if (!(totValidation[7])){
        incorrectSubmitText += "Please enter a valid city: at least 3 characters.\n\n";
      }
      if (!(totValidation[8])){
        incorrectSubmitText += "Please enter a valid postal code: at least 3 characters.\n\n";
      }
      if (!(totValidation[9])){
        incorrectSubmitText += "Please enter a valid DNI: 7 or 8 digits number.\n";
      }
      alert(incorrectSubmitText);
    }
}

//Button event listener
button = document.getElementById("container-button");
button.addEventListener("click", handleSubmit);
