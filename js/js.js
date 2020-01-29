var texto = ''
var persona = {
  nombre : '',
  edad   : ''
}

// mensaje(persona)
function mensaje(persona){
  persona.nombre = document.getElementById('nombre').value,
  persona.edad   = document.getElementById('edad').value
  texto = 'Su nombre es: ' + persona.nombre + ' y tiene ' + persona.edad + ' años'
    document.getElementById('respuesta').innerHTML = texto
}
