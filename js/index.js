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

focus
load


// $$$ SIX $$$
const body = document.querySelector('body');
body.addEventListener('keydown', function() {
    alert('You Typed Something');
})


// $$$ SEVEN $$$



// $$$ EIGHT $$$



// $$$ NINE $$$



// $$$ TEN $$$