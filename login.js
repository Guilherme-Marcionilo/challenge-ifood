
function validacao() {

    let email = "login@login.com"
    let resultadoEmail = document.getElementById('email-form').value;

  if( resultadoEmail == email) {
    document.getElementById('message').innerHTML = "<p class='text-success'>Login bem-sucedido!</p>";
    
  } else {
    document.getElementById('message').innerHTML = "<p class='text-danger'>E-mail não encontrado.</p>";
  }
    

}