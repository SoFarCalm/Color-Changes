var toggle = document.getElementById('toggle');
var body = document.getElementById('menu');
var menu = document.getElementById('menu-side');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var surprise = document.getElementById('surprise')
var img = document.getElementById('dubai');
var secret = document.getElementById('secret');

toggle.addEventListener('click', function show1() {
  // toggle body
  if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
  } else {
      body.classList.add('menu-open');
  }
  // toggle menu
  if (menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
  } else {
      menu.classList.add('menu-open');
  }
});

box1.addEventListener('click', changeColor);
box2.addEventListener('click', changeColor);
box3.addEventListener('click', changeColor);
box4.addEventListener('click', changeColor);
box5.addEventListener('click', changeColor);

function changeColor() {
  var boxId = this.attributes["data-box"].value;
  var box = document.getElementById(boxId);
  if (box.classList.contains('color1')) {
    body.style.backgroundColor = 'red';
    surprise.style.visibility = 'hidden';
    secret.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color2')) {
            body.style.backgroundColor = 'blue';
            surprise.style.visibility = 'hidden';
            secret.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color3')) {
            body.style.backgroundColor = 'green';
            surprise.style.visibility = 'hidden';
            secret.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color4')) {
            body.style.backgroundColor = 'orange'
            surprise.style.visibility = 'visible';
            secret.style.visibility = 'visible';
  } else {
            body.style.backgroundColor = 'white';
            surprise.style.visibility = 'hidden';
            secret.style.visibility = 'hidden';
  }
}

surprise.addEventListener('click', function imgSlide() {
  if (img.classList.contains('show')) {
      img.classList.remove('show');
  } else {
      img.classList.add('show');
  }
});
