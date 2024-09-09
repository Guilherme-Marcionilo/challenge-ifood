function mostrarSenha(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
  } else {
    inputPass.setAttribute('type','password')
    btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
  }
}


document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const icon = this;

  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
  } else {
      passwordField.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
  }
});