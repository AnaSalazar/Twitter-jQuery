var contador140Caracteres = 0;

var funcionAEjecutar = function () {
    $("#formulario").submit(agregarTweet);
    $("#mensaje").keyup(validarContenido);
    $("#mensaje").keyup(conteoDeCaracteres);
}

var agregarTweet = function (e) {
  e.preventDefault();

  var $areaDetweets = $("#tweets");
  var $tweetEscribiendo = $("#mensaje");
  var $tweet = $tweetEscribiendo.val();
  var $mostrarUsuario = $("#usuario").val();
  var $crearTweet = $("#enviarTweet");

  var $contenedorTweet = $("<article />", { "class": "jumbotron morado textoAmarillo"});
  var $tweetMostrado = $("<p />");
  var $botonBorrarTweet = $("<button />", {"type": "button", "text": "Borrar Tweet", "class": "botonBorrarTweet btn-warning"});

  $botonBorrarTweet.click(borrarTweet);

  $($areaDetweets).prepend($contenedorTweet);
  $($contenedorTweet).append($tweetMostrado);
  $($tweetMostrado).append($tweet);
  $($contenedorTweet).append($mostrarUsuario);
  $($contenedorTweet).append($botonBorrarTweet);

  $($tweetEscribiendo).val("");
  $("#usuario").val("");
  $($crearTweet).attr("disabled", true);
}

var borrarTweet = function () {
  var contenedorTweet = this.parentElement;
  contenedorTweet.remove();
  $(this).parent().remove();
}

var validarContenido = function () {
  var $botonEnviarTweet = $("#enviarTweet");
  // .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
  if($(this).val().trim().length > 0) {
  	$botonEnviarTweet.removeAttr("disabled");
    } else {
      $botonEnviarTweet.attr("disabled", true);
    }
}

var conteoDeCaracteres = function () {
  if(contador140Caracteres < 140){
    contador140Caracteres += 1;
    var caracteres = $("#caracteres");
    caracteres.text(contador140Caracteres);
  }else {
    alert("No puedes escribir más de 140 caracteres");
  }
}

$(document).ready(funcionAEjecutar);
