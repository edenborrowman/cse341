const backdrop = document.querySelector('.backdrop');
const sideDrawer = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('#side-menu-toggle');

function backdropClickHandler() {
  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);


function fireEngineer1() {
  console.log('peaches');
  var fired = document.getElementById("x-spot-1");
  fired.classList.toggle("fired");
}

function fireEngineer2() {
  console.log('peaches');
  var fired = document.getElementById("x-spot-2");
  fired.classList.toggle("fired");
}

function fireEngineer3() {
  console.log('peaches');
  var fired = document.getElementById("x-spot-3");
  fired.classList.toggle("fired");
}