var elemento = document.getElementById('center-blockJS');
var colorAleatorio = generarColorAleatorio();


document.getElementById('generateButton').addEventListener('click', generarColorAleatorio);

document.documentElement.style.setProperty('--navBarItems', colorAleatorio);

function generarColorAleatorio() {
    var caracteres = '0123456789ABCDEF';
    var color = '#';
  
    for (var i = 0; i < 6; i++) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }
  
    document.documentElement.style.setProperty('--navBarItems', color);
  }