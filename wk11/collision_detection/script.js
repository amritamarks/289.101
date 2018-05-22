/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck initial location and speed
var puck_x = 210;
var puck_y = 210;
var speed = 10;
var size = 0;
var puck = document.getElementById('puck');

// adding the coordinates to puck
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

//function to log coordinates
function logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y);
}

function checkCollision() {
    //collision detection code goes here
    if (puck_x >=250 && puck_x < 350){
        gap.style.backgroundColor = 'red';        console.log('collision!');
    }
    
    else {
        gap.style.backgroundColor ='white';
    }
}

function teleportright () {
    //teleport code goes here
    if (puck_x > 590){
    puck.style.left = -10 + 'px';
    }
}

function teleportleft () {
    //teleport code goes here
    if (puck_x < -10){
    puck.style.left = 590 + 'px';
    }
}

    
//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x +'px';
    logCoordinates();
    checkCollision();
    teleportleft();
});

//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x +'px';
    logCoordinates();
    checkCollision();
    teleportright();
});

//move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y +'px';
    logCoordinates();
    checkCollision();
});

//move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y +'px';
    logCoordinates();
    checkCollision();
});

//make bigger 
document.getElementById('bigger').addEventListener('click', function(){
    puck_x +=10
    puck.style.width = puck_x +'px';
    logCoordinates();
    checkCollision();
});

//make smaller
document.getElementById('smaller').addEventListener('click', function(){
    puck_x -=10
    puck_x =size
    puck.style.width = puck_x +'px';
    logCoordinates();
    checkCollision();
});



 