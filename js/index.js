// Your code goes here


// $$$ ONE $$$
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('dblclick', function() {
    logoHead.style.color = 'blue';
});

// $$$ TWO $$$ 
const img = document.querySelector('.intro img');
img.addEventListener('click', function(x) {
    alert('Oh no! You clicked it!!');
});

// $$$ THREE $$$
window.addEventListener('contextmenu', function(event) {
    alert('HEY THERE')
});

// $$$ FOUR $$$
const intro = document.querySelector('.intro');
intro.addEventListener('drag', function() {
    intro.style.backgroundColor = "red";
});


// $$$ FIVE $$$
intro.addEventListener('dragend', function() {
    alert('You Cannot Do That')
});



// $$$ SIX $$$
const body = document.querySelector('body');
body.addEventListener('keydown', function() {
    alert('You Typed Something');
})


// $$$ SEVEN $$$
window.addEventListener("load", function() {
    alert("All resources finished loading!");
  });




// $$$ EIGHT $$$
const navTop = document.querySelector('.nav-link');
navTop.addEventListener('focusout', function() {
    navTop.style.color = "orange";
});


// $$$ NINE $$$
window.addEventListener('resize', function() {
    alert('Resizing!');
});



// $$$ TEN $$$
const destination = document.querySelector('.content-destination');
destination.addEventListener('mouseover', function() {
    destination.style.color = "blue";
});

const destinationP = document.querySelector('.content-destination p');
destinationP.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    destinationP.style.color = "red";
});

   



// $$$ Prevent Default $$$
const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function(event) {
      event.preventDefault();
    });
  }