const getEmail = document.querySelector('#input-loguin');
const getPassword = document.querySelector('#input-senha');

const getButton = document.querySelector('#form-button');
getButton.addEventListener('click', () => {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const getAgreement = document.querySelector('#agreement');
const getSubmitButton = document.querySelector('#submit-btn');

getAgreement.addEventListener('click', (event) => {
  // console.log(event.target.checked);
  if (event.target.checked) {
    getSubmitButton.removeAttribute('disabled');
  } else {
    getSubmitButton.setAttribute('disabled', true);
  }
});
