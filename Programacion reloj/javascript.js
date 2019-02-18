	
// esta parte primera del código define como va a ser pintada en la web el tiempo.

  function get_elapsed_time_string(total_seconds) {
	function pretty_time_string(num) {
    return ( num < 10 ? "0" : "") + num;
  }

// funcion get_elapsed_time_string se define como el total de segundos
// funcion pretty_time_string se define como num
// retorna que si el numero es menor que 10, añade un 0 antes del número

	var hours = Math.floor(total_seconds / 3600);
	total_seconds = total_seconds % 3600;

	var minutes = Math.floor(total_seconds / 60);
	total_seconds = total_seconds % 60;

	var seconds = Math.floor(total_seconds);

// las horas estan escritas como la division de los segundos. 3600s = 1h. 60s=1min. seconds: total_seconds;


  hours = pretty_time_string(hours);
  minutes = pretty_time_string(minutes);
  seconds = pretty_time_string(seconds);
  
  var currentTimeString = hours + ":" + minutes + ":" +seconds;

  return currentTimeString;
}

var elapsed_seconds = 0;
setInterval(function() {
  elapsed_seconds = elapsed_seconds + 1;
  $('#box_header').text(getdate(elapsed_seconds));
}, 1000);

// funcion de jQuery --> el id "box_header" es donde .text (pintar en html) va a hacer efecto.
// añadimos a la variable getdate los elapsed_seconds definidos, y marcamos su inicio en "0" --> el primero del conjunto.

// a partir de aqui se define cómo se consiguen los datos, y que datos de Date queremos. Horas minutos y segundos.

function getdate(){
                var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

             if(m<10){
             	m = "0"+m	
             };

             if(h<10){
             	h = "0"+h	
             };

            $("h1").text(h+":"+m+":"+s);
             setTimeout(function(){getdate()}, 500);
            }

// getdate es una funcion previamente definida por js. El problema es que nos da todos los datos, mes, año, posicion, etc.
// como solo queremos horas minutos y segundos, creamos las variables "h", "m", y "s", para que solamente salgan los datos
// de horas minutos y segundos, y no coja ninguno de los otros datos.

           
// hasta aqui el reloj

