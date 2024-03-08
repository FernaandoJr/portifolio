var i = 0;
var txt = ' Entusiasta em tecnologia e apaixonado por programação/desenvolvimento em criar soluções e resolver problemas!';
var speed = 30;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }