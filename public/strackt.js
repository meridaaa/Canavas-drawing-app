var socket;

function setup(){
    createCanvas(600, 600);
    background(51);
    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawaing)
}

function newDrawaing(data){
    noStroke();
    fill(255, 0, 100)
    ellipse(data.x, data.y, 36, 36)

}

function mouseDragged(){
    noStroke();
    fill(255)
    ellipse(mouseX, mouseY, 36, 36)

    var data ={
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);
}

function draw(){
    
}