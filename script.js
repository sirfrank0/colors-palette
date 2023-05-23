
document.getElementById('generateButton').addEventListener('click', generarColoresAleatorios);

function generarColoresAleatorios() {
  var colorAleatorio1 = generarColorAleatorio();
  var colorAleatorio2 = generarColorAleatorio();
  var colorAleatorio3 = generarColorAleatorio();

  document.documentElement.style.setProperty('--color60', colorAleatorio1);
  document.documentElement.style.setProperty('--color30', colorAleatorio2);
  document.documentElement.style.setProperty('--color10', colorAleatorio3);
}

function generarColorAleatorio() {
  var caracteres = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }

  return color;
}
























//  var colorAleatorio = generarColorAleatorio();


//  document.getElementById('generateButton').addEventListener('click', generarColorAleatorio);

//  document.documentElement.style.setProperty('--navBarItems', colorAleatorio);
//  document.documentElement.style.setProperty('--bgSearchbar', colorAleatorio);

//  function generarColorAleatorio() {
//      var caracteres = '0123456789ABCDEF';
//      var color = '#';
  
//      for (var i = 0; i < 6; i++) {
//        color += caracteres[Math.floor(Math.random() * 16)];
//      }
  
//      document.documentElement.style.setProperty('--navBarItems', color);
//      document.documentElement.style.setProperty('--bgSearchbar', color);
//    }