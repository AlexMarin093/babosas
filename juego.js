

// llamo los id del index de la batalla.html.


let mensaje = document.getElementById('mensaje');
let ataqueFuego = document.getElementById('boton-fuego');
let ataqueAgua = document.getElementById('boton-agua');
let ataqueElectrico = document.getElementById('boton-electrico');
let defensaFuego = document.getElementById('boton-fuego-defensa');
let defensaAgua = document.getElementById('boton-agua-defensa');
let defensaElectrico = document.getElementById('boton-electrico-defensa');
let barraVidaJugador = document.querySelector('.barra-vida');
let barraVidaEnemigo = document.querySelector('.barra-vida-enemigo');
let eleccion = document.getElementById('titulo');


// Crear variables.

let ataqueJugador;
let defensaJugador;
let ataqueEnemigo;
let defensaEnemigo;
let vidaJugador = 100;
let vidaEnemigo = 100;


//Funcion para que cuando ataque el jugador desaparazca las defensas, y si es viceversa, entonces que desaparezca los ataques y aparezcan las defensas.

desactivardefensas();

ataqueFuego.addEventListener('click', function() {
  ataqueJugador = "fuego";
  desactivarataques();
  activardefensas();
  defensaAleatorioEnemigo();
});

ataqueAgua.addEventListener('click', function() {
  ataqueJugador = "agua";
  desactivarataques();
  activardefensas();
  defensaAleatorioEnemigo();
});

ataqueElectrico.addEventListener('click', function() {
  ataqueJugador = "electrico";
  desactivarataques();
  activardefensas();
  defensaAleatorioEnemigo();
});

defensaFuego.addEventListener('click', function() {
  defensaJugador = "fuego";
  desactivardefensas();
  activarataques();
  ataqueAleatorioEnemigo();
});

defensaAgua.addEventListener('click', function() {
  defensaJugador = "agua";
  desactivardefensas();
  activarataques();
  ataqueAleatorioEnemigo();
});

defensaElectrico.addEventListener('click', function() {
  defensaJugador = "electrico";
  desactivardefensas();
  activarataques();
  ataqueAleatorioEnemigo();
});

//Funcion para que cuando ataque el jugador desaparazca las defensas, y si es viceversa, entonces que desaparezca los ataques y aparezcan las defensas.


function desactivarataques() {
  ataqueFuego.classList.add('desactivar');  // El classList.add nos agrega una clase especifica al elemento.
  ataqueAgua.classList.add('desactivar');
  ataqueElectrico.classList.add('desactivar');
}

function activarataques() {
  ataqueFuego.classList.remove('desactivar'); // El classList.remove nos elimina una clase especifica del elemneto.
  ataqueAgua.classList.remove('desactivar');
  ataqueElectrico.classList.remove('desactivar');
  eleccion.innerHTML = "ELIGE TU ATAQUE";
}

function desactivardefensas() {
  defensaFuego.classList.add('desactivar');
  defensaAgua.classList.add('desactivar');
  defensaElectrico.classList.add('desactivar');
}

function activardefensas() {
  defensaFuego.classList.remove('desactivar');
  defensaAgua.classList.remove('desactivar');
  defensaElectrico.classList.remove('desactivar');
  eleccion.innerHTML = "ELIGE TU DEFENSA";
}

function ataqueAleatorioEnemigo() {
  var opcionesataque = ["fuego", "agua", "electrico"];
  var aleatorio = generaraleatorio();
  ataqueEnemigo = opcionesataque[aleatorio];
  dañorealizadojugador();
  finalizarjuego();
}

// Este codigo nos crea una funcion para generar un ataque aleatorio a la maquina.

function generaraleatorio() {
  return Math.floor(Math.random() * 3); // Me crea un ataque aleatorio
}

// Le damos las 3 opciones de selecion aleatoria a la maquina.
function defensaAleatorioEnemigo() {
  var opciondefensa = ["fuego", "agua", "electrico"];
  aleatorio = generaraleatorio();
  defensaEnemigo = opciondefensa[aleatorio];
  dañorealizadoenemigo();
  finalizarjuego();
}

// Creacion de tabla de daño con, condicionales. En este caso para el enemigo "la maquina".

function dañorealizadoenemigo() {
  if (ataqueJugador === defensaEnemigo) {
    vidaEnemigo -= 10;
    mensaje.innerHTML = "El jugador ha atacado con " + ataqueJugador + " y el enemigo se ha defendido con " + defensaEnemigo + ", le has quitado 10";
    barraVidaEnemigo.style.width = vidaEnemigo + '%';
  } else if ((ataqueJugador === "fuego" && defensaEnemigo === "agua") || (ataqueJugador === "electrico" && defensaEnemigo === "fuego") || (ataqueJugador === "agua" && defensaEnemigo === "electrico")) {
    mensaje.innerHTML = "El jugador ha atacado con " + ataqueJugador + " y el enemigo se ha defendido con " + defensaEnemigo + ", le has quitado 0";
    barraVidaEnemigo.style.width = vidaEnemigo + '%';
  } else if ((ataqueJugador === "agua" && defensaEnemigo === "fuego") || (ataqueJugador === "fuego" && defensaEnemigo === "electrico") || (ataqueJugador === "electrico" && defensaEnemigo === "agua")) {
    vidaEnemigo -= 20;
    mensaje.innerHTML = "El jugador ha atacado con " + ataqueJugador + " y el enemigo se ha defendido con " + defensaEnemigo + ", le has quitado 20";
    barraVidaEnemigo.style.width = vidaEnemigo + '%';
  }
}
 
//Creacion de tabla de daño con, condicionales. En este caso para el jugador

function dañorealizadojugador() {
  if (ataqueEnemigo === defensaJugador) {
    vidaJugador -= 10;
    // el innerHTML se utiliza para obtener o establecer el contenido HTML de un elemento. 
    mensaje.innerHTML = "El enemigo ha atacado con " + ataqueEnemigo + " y el jugador se ha defendido con " + defensaJugador + ", te han quitado 10";
    barraVidaJugador.style.width = vidaJugador + '%';
  } else if ((ataqueEnemigo === "fuego" && defensaJugador === "agua") || (ataqueEnemigo === "electrico" && defensaJugador === "fuego") || (ataqueEnemigo === "agua" && defensaJugador === "electrico")) {
    mensaje.innerHTML = "El enemigo ha atacado con " + ataqueEnemigo + " y el jugador se ha defendido con " + defensaJugador + ", te han quitado 0";
    barraVidaJugador.style.width = vidaJugador + '%';
  } else if ((ataqueEnemigo === "agua" && defensaJugador === "fuego") || (ataqueEnemigo === "fuego" && defensaJugador === "electrico") || (ataqueEnemigo === "electrico" && defensaJugador === "agua")) {
    vidaJugador -= 20;
    mensaje.innerHTML = "El enemigo ha atacado con " + ataqueEnemigo + " y el jugador se ha defendido con " + defensaJugador + ", le has quitado 20";
    barraVidaJugador.style.width = vidaJugador + '%';
  }
}

//Funcion para la finalizacion del juego

function finalizarjuego() {
  if (vidaJugador <= 0 && vidaEnemigo <= 0) {
    mensaje.innerHTML = "Es un empate";
  } else if (vidaEnemigo <= 0) {
    mensaje.innerHTML = "El jugador ha derrotado al enemigo FELICITACIONES";
    desactivarataques();
    desactivardefensas();
  } else if (vidaJugador <= 0) {
    mensaje.innerHTML = "El enemigo te ha derrotado, Perdiste la ronda pero no la guerra";
    desactivarataques();
    desactivardefensas();
  }
}