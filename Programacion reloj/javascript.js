	
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

var particleAlphabet = {
  Particle: function(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 3.5;
    this.draw = function(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.fillStyle = 'yellow';
      ctx.fillRect(0, 0, this.radius, this.radius);
      ctx.restore();
    };
  },
  init: function() {
    particleAlphabet.canvas = document.querySelector('canvas');
    particleAlphabet.ctx = particleAlphabet.canvas.getContext('2d');
    particleAlphabet.W = window.innerWidth;
    particleAlphabet.H = window.innerHeight;
    particleAlphabet.particlePositions = [];
    particleAlphabet.particles = [];
    particleAlphabet.tmpCanvas = document.createElement('h1');
    particleAlphabet.tmpCtx = particleAlphabet.tmpCanvas.getContext('2d');

    particleAlphabet.canvas.width = particleAlphabet.W;
    particleAlphabet.canvas.height = particleAlphabet.H;

    setInterval(function(){
      particleAlphabet.changeLetter();
      particleAlphabet.getPixels(particleAlphabet.tmpCanvas, particleAlphabet.tmpCtx);
    }, 1200);

    particleAlphabet.makeParticles(1000);
    particleAlphabet.animate();
  }, 
  currentPos: 0,
  changeLetter: function() {
    var letters = '1234567890',
      letters = letters.split('');
    particleAlphabet.time = letters[particleAlphabet.currentPos];
    particleAlphabet.currentPos++;
    if (particleAlphabet.currentPos >= letters.length) {
      particleAlphabet.currentPos = 0;
    }
  },
  makeParticles: function(num) {
    for (var i = 0; i <= num; i++) {
      particleAlphabet.particles.push(new particleAlphabet.Particle(particleAlphabet.W / 2 + Math.random() * 400 - 200, particleAlphabet.H / 2 + Math.random() * 400 -200));
    }
  },
  getPixels: function(canvas, ctx) {
    var keyword = particleAlphabet.time,
      gridX = 6,
      gridY = 6;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'red';
    ctx.font = 'italic bold 330px Noto Serif';
    ctx.fillText(keyword, canvas.width / 2 - ctx.measureText(keyword).width / 2, canvas.height / 2 + 100);
    var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var buffer32 = new Uint32Array(idata.data.buffer);
    if (particleAlphabet.particlePositions.length > 0) particleAlphabet.particlePositions = [];
    for (var y = 0; y < canvas.height; y += gridY) {
      for (var x = 0; x < canvas.width; x += gridX) {
        if (buffer32[y * canvas.width + x]) {
          particleAlphabet.particlePositions.push({x: x, y: y});
        }
      }
    }
  },
  animateParticles: function() {
    var p, pPos;
    for (var i = 0, num = particleAlphabet.particles.length; i < num; i++) {
      p = particleAlphabet.particles[i];
      pPos = particleAlphabet.particlePositions[i];
      if (particleAlphabet.particles.indexOf(p) === particleAlphabet.particlePositions.indexOf(pPos)) {
      p.x += (pPos.x - p.x) * .3;
      p.y += (pPos.y - p.y) * .3;
      p.draw(particleAlphabet.ctx);
    }
    }
  },
  animate: function() {
    requestAnimationFrame(particleAlphabet.animate);
    particleAlphabet.ctx.fillStyle = 'rgba(23, 41, 58, .8)';
    particleAlphabet.ctx.fillRect(0, 0, particleAlphabet.W, particleAlphabet.H);
    particleAlphabet.animateParticles();
  }
};

window.onload = particleAlphabet.init;

// texto de codigo cogido de https://codepen.io/gbnikolov/pen/jEqQdG realizado por Georgi Nikoloff