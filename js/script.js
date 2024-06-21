let submitButton = document.getElementById('formButton');

document.addEventListener('DOMContentLoaded', function () {
    var campoNome = document.getElementById('nome');
    campoNome.select();
    campoNome.focus();
});

submitButton.addEventListener('click', function(event){
    event.preventDefault();

    var campoNome = document.getElementById('nome');
    var campoSobrenome = document.getElementById('lastName');
    var campoRA = document.getElementById('ra');
    var campoUnidade = document.getElementById('unidade');
    var campoSemestre = document.getElementById('semestre');
    var campoMensagem = document.getElementById('mensagem');
    var validForm = 0;

    if (campoNome.value.length < 3){
      alert('Digite um nome válido');
      campoNome.focus();
    } else{
      validForm = validForm + 1;
    }

    if (campoSobrenome.value.length < 3){
      alert('Digite um sobrenome válido');
      campoSobrenome.focus();
    } else{
      validForm = validForm + 1;
    }

    if (campoRA.value.length < 13){
      alert('R.A. inválido');
      campoRA.focus();
    } else {
      validForm = validForm + 1;
    }

    if (campoUnidade.value.length < 5){
      alert('Informe a unidade');
      campoUnidade.focus();
    } else{
      validForm = validForm +1;
    }
    
    if (campoSemestre.value == ''){
      alert('Informe o semestre');
      campoSemestre.focus();
    } else{
      validForm = validForm + 1;
    }

    if (campoMensagem.value.length < 10){
      alert('Digite sua mensagem');
      campoMensagem.focus();
    } else {
      validForm = validForm + 1;
    }

    console.log(validForm);

    if (validForm == 6){
      let telaFlutuante = document.getElementById('telaFlutuante');
      telaFlutuante.style.display = 'block';

      console.log('oioioi');

      setTimeout(function() {
        telaFlutuante.style.display = 'none';
      }, 5000); 
    }
    
})
