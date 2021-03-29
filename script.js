function enviar(){
    valorDigitado = document.getElementById('value').value;
    valorDolar = 5.50;
    resultado = valorDigitado * valorDolar;
    resultado = resultado.toFixed(2);
    console.log(resultado);

    var text = document.getElementById('result');

    if(valorDigitado == 0) {
      text.style = 'color: red;';
      text.innerHTML='<h2>' + "Digite um Valor!"+ '</h2> ';
    }
    else {

      resultadoFormatado = parseFloat(resultado);

    resultadoMoeda = resultadoFormatado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    var text = document.getElementById('result');
    text.style = 'color: #00bbf9;';

      text.innerHTML='<h2>' + resultadoMoeda+ '</h2>';

      var audio = new Audio('./assets/super-mario-bros-coin-sound-effect-free-ringtone-download.mp3');
    audio.volume = 0.1;
    audio.play();
    }
  }