let submitButton = document.getElementById('formButton')

document.addEventListener('DOMContentLoaded', function () {
    var campoNome = document.getElementById('nome');
    campoNome.select();
    campoNome.focus();
});

submitButton.addEventListener('click', function(event){
    event.preventDefault();

    let telaFlutuante = document.getElementById('telaFlutuante');
    telaFlutuante.style.display = 'block';

    console.log('oioioi');

    setTimeout(function() {
      telaFlutuante.style.display = 'none';
    }, 5000); 
})
