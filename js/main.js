"use strict"
let listaMensajes = new Array(100);
class Mensaje {
  constructor(usuario, texto) {
    this.usuario = usuario;
    this.texto = texto;
  }
  toString() {
    return this.usuario + ": " + this.texto;
  }
}

function isNullOrWhitespace( input ) {

  if (typeof input === 'undefined' || input == null) return true;

  return input.replace(/\s/g, '').length < 1;
}

function almacenar(user, text) {
  if(!isNullOrWhitespace(user)) {
    let hoy = new Date();// Variable para la fecha actual
    let fechaHora = hoy.getDay()+"-"+hoy.getMonth()+"-"+hoy.getFullYear()+" ; "+hoy.getHours()+":"+hoy.getMinutes();// La fecha y hora actual
    const texto = new Mensaje(user, text);// El texto recogido de los parámetros
    let mensaje = document.createTextNode(texto.toString())
    let messageHours = document.createTextNode(fechaHora.toString())
    let p = document.createElement("p");// Se crea un <p> con el mensaje
    p.setAttribute("id","textoMensaje");
    let fh = document.createElement("p");
    fh.setAttribute("id","horactual")
    p.appendChild(mensaje);// Se enlaza el mensaje al <p>
    fh.appendChild(messageHours);
    let bloqueMensaje = document.createElement("div");
    bloqueMensaje.setAttribute("id","bloqueMensaje");
    bloqueMensaje.appendChild(p);// Se añade el <p> al muro de la página
    bloqueMensaje.appendChild(fh);
    listaMensajes.push(bloqueMensaje);
  }else{
    window.alert("Por favor, introduzca usted un nombre de usuario");
  }
}

function escribir() {
  let elemento = document.getElementById("muro");// El div en html
  listaMensajes.forEach(element => elemento.appendChild(element));
}

