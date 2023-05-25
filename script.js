



document.getElementById('generateButton').addEventListener('click', generarColoresAleatorios);

function generarColoresAleatorios() {
  var colorAleatorio1 = generarColorAleatorio();
  var colorAleatorio2 = generarColorContraste(colorAleatorio1);
  var colorAleatorio3 = generarColorAleatorio();

  document.documentElement.style.setProperty('--color60', colorAleatorio1);
  document.documentElement.style.setProperty('--color30', colorAleatorio2);
  document.documentElement.style.setProperty('--color10', colorAleatorio3);

  var colorValuesDiv = document.getElementById('colorValues');
  colorValuesDiv.innerHTML = `
    Color 60%: ${colorAleatorio1}<br> <div style="background-color: ${colorAleatorio1}; width: 50px; height: 25px;"></div> 
    Color 30%: ${colorAleatorio2}<br> <div style="background-color: ${colorAleatorio2}; width: 50px; height: 25px;"></div> 
    Color 10%: ${colorAleatorio3}<div style="background-color: ${colorAleatorio3}; width: 50px; height: 25px;"></div> 
  `;
}

function generarColorAleatorio() {
  var caracteres = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generarColorContraste(color) {
  var luminosidad = calcularLuminosidad(color);
  var colorContraste = luminosidad > 0.5 ? '#151515' : '#f2f2f2';
  return colorContraste;
}

function calcularLuminosidad(color) {
  var r = parseInt(color.substring(1, 3), 16) / 255;
  var g = parseInt(color.substring(3, 5), 16) / 255;
  var b = parseInt(color.substring(5, 7), 16) / 255;

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);

  return (max + min) / 2;
}


























