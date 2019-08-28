let player = [];
let ball;
let ballImg;
let img;

function preload()
 {
    img = loadImage('venttiilikostaja.jpg');
    ballImg = loadImage('venttiilikostajapaa.png'); 
 }

function setup() {
    createCanvas(800, 800);
    player = [new Player(25, height / 2, 10, height / 8, true), new Player(width - 25, height / 2,10, height / 8, false)];
    ball = new Ball(width / 2, height / 2, 100);
    frameRate(60);
}

function draw() {
    image(img, 0, 0, width, height);
    image(ballImg, ball.pos.x - ball.r / 2, ball.pos.y - ball.r / 2, 100, 100)
    //draw player
    for(let i = 0; i < player.length; i++) {
        player[i].draw();
    }

    //draw middle line
    stroke(255);
    strokeWeight(2);
    line(width / 2, 0, width / 2, height);

    //movement
    if (keyIsDown(UP_ARROW) && player[1].pos.y - player[1].h/2 > 0)
    {
        player[1].pos.y -= height / 80;
    }
    else if (keyIsDown(DOWN_ARROW) && player[1].pos.y < height - player[1].h / 2)
    {
        player[1].pos.y += height / 80;
    }

    if (keyIsDown(87) && player[0].pos.y - player[0].h / 2 > 0)
    {
        player[0].pos.y -= height / 80;
    }
    else if (keyIsDown(83) && player[0].pos.y < height - player[0].h / 2)
    {
        player[0].pos.y += height / 80;
    }

    //ball movement
    ball.update();
    ball.draw();
    stroke(255,0,0);
    line(0, height, width, height);
    line(0,0,width,0)
    noStroke();
    ball.edgeCheck();

    //if ball hits player
    if (collideRectCircle(player[0].pos.x, player[0].pos.y - player[0].h / 2, player[0].w, player[0].h, ball.pos.x, ball.pos.y, ball.r))
    {
        ball.leftPlayer(player[0]);
    }
    if (collideRectCircle(player[1].pos.x, player[1].pos.y - player[1].h / 2, player[1].w, player[1].h, ball.pos.x, ball.pos.y, ball.r))
    {
        ball.rightPlayer(player[1]);
    }
    else if (ball.pos.x > width)
    {
        ball.pos.x = width / 2;
        ball.reset();
        player[0].score++;
    }
    else if (ball.pos.x < 0)
    {
        ball.pos.x = width / 2;
        ball.reset();
        player[1].score++;
    }
}