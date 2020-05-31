///// FADE IN ANIMATION ON PAGELOAD /////
// const addAnimation = (element) => {
//     element.classList.add('animate__animated', 'animate__fadeIn');
//   }
$('.hero_fade').waypoint(function(direction) {
    $('.hero_fade').addClass('animate__animated animate__fadeIn')
}, {
    offset: '80%'
});

$('.waypoint_1').waypoint(function(direction) {
    $('.waypoint_1').addClass('animate__animated animate__fadeIn')
}, {
    offset: '20%'
});

$('.waypoint_2').waypoint(function(direction) {
    $('.waypoint_2').addClass('animate__animated animate__fadeIn')
}, {
    offset: '65%'
});


///// BACKGROUND IMAGE CHANGE /////
let i = 0;
const images = []; // initialize array
const time = 5000; // time in milliseconds

// populate array
images[0] = 'url(./img/aboutme-photo-1.jpg)';
images[1] = 'url(./img/aboutme-photo-2.jpg)';
images[2] = 'url(./img/aboutme-photo-3.jpg)';

const changeImage = () => {
  const el = document.getElementById('aboutMe');
  el.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.800), rgba(255, 255, 255, 0.800)), ${images[i]}`;

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImage()', time);
};

window.onload = changeImage;

///// FORM VALIDATION /////
const form = document.querySelector('#signUp_form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const address = document.getElementById('address');
const province = document.getElementById('province');
const country = document.getElementById('country');
const postalCode = document.getElementById('postalCode');

// show input error
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'signUp_form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
};

// show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'signUp_form-control success';
};

// capitalize the first letter of field name
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// check that field has an input
const confirmInput = (input) => {
  if (input.value.trim() === '') {
    showError(input, `${getFieldName(input)} is required`);
  } else {
    showSuccess(input);
  }
};

// check that email is valid
const checkEmail = (input) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Please enter a valid email');
  }
};

// check that postal code is valid
const checkPostalCode = (input) => {
  const regex = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Please enter a valid postal code');
  }
};

//TODO - refactor this using a loop
const validateForm = (myForm) => {
  let errorLog = '';

  if (myForm.firstName.value === '') {
    errorLog += 'firstName';
    showError(firstName, 'FirstName is required');
  } else {
    showSuccess(firstName);
  }
  if (myForm.lastName.value === '') {
    errorLog += 'lastName';
    showError(lastName, 'LastName is required');
  } else {
    showSuccess(lastName);
  }
  if (myForm.userName.value === '') {
    errorLog += 'userName';
    showError(userName, 'UserName is required');
  } else {
    showSuccess(userName);
  }
  if (myForm.email.value === '') {
    errorLog += 'email';
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }
  if (myForm.address.value === '') {
    errorLog += 'address';
    showError(address, 'Address is required');
  } else {
    showSuccess(address);
  }
  if (myForm.province.value === '') {
    errorLog += 'province';
    showError(province, 'Province is required');
  } else {
    showSuccess(province);
  }
  if (myForm.country.value === '') {
    errorLog += 'country';
    showError(country, 'Country is required');
  } else {
    showSuccess(country);
  }
  if (myForm.postalCode.value === '') {
    errorLog += 'postalCode';
    showError(postalCode, 'PostalCode is required');
  } else {
    showSuccess(postalCode);
  }

  if (errorLog === '') {
    return confirm('Submit Form?');
  } else {
    return false;
  }
};


///// TODO /////
// // remove error/success indicators
// const removeIndicators = (input) => {
//     const formControl = input.parentElement;
//     formControl.classList.toggle('signUp_form-control success');
//     formControl.classList.toggle('signUp_form-control error');

//     const small = formControl.querySelector('small');
//     small.innerText = '';
// }

// // apply removeIndicators to all fields on form reset
// const resetFields = () => {
//     inputArray = [firstName, lastName, userName, email, address, province, country, postalCode];

//     inputArray.forEach((input) => {
//         removeIndicators(input);
//     })
// }