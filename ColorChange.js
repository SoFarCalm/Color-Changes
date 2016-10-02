var toggle = document.getElementById('toggle');
var body = document.getElementById('menu');
var menu = document.getElementById('menu-side');
var surprise = document.getElementById('surprise');
var img = document.getElementById('dubai');
var found = document.getElementById('found');
var boxes = document.getElementsByClassName('box');

//Toggle Menu//
toggle.addEventListener('click', function show() {
  if (body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
  } else {
      body.classList.add('menu-open');
  }
  if (menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
  } else {
      menu.classList.add('menu-open');
  }
});

//Change Background Color//
for ( i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  box.addEventListener('click', changeColor);
}

function changeColor(event) {
  // uncomment this to see everything in the event
  // console.log(event);
  var box = event.target;
  if (box.classList.contains('color1')) {
    body.style.backgroundColor = 'red';
    found.style.visibility = 'hidden';
    surprise.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color2')) {
    body.style.backgroundColor = 'blue';
    found.style.visibility = 'hidden';
    surprise.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color3')) {
    body.style.backgroundColor = 'green';
    found.style.visibility = 'hidden';
    surprise.style.visibility = 'hidden';
  }
  else if (box.classList.contains('color4')) {
    body.style.backgroundColor = 'orange'
    found.style.visibility = 'visible';
    surprise.style.visibility = 'visible';
  } else {
    body.style.backgroundColor = 'white';
    found.style.visibility = 'hidden';
    surprise.style.visibility = 'hidden';
  }
}

//Image Slide//
surprise.addEventListener('click', function imgSlide() {
  if (img.classList.contains('show')) {
      img.classList.remove('show');
  } else {
      img.classList.add('show');
  }
});
