class Ball 
{
    constructor(x,y,r)
    {
        this.pos = createVector(x, y);
        this.r = r;
        this.velx = 0;
        this.vely = 0;
        this.speed = 10;

        this.reset();
    }

    leftPlayer(player)
    {
        let diff = this.pos.y - (player.pos.y - player.h/2);
        let rad = radians(45);
        let angle = map(diff, 0, player.h, -rad, rad);
        this.velx = this.speed * cos(angle);
        this.vely = this.speed * sin(angle);
        //this.pos.x = player.pos.x + player.w/2+this.r;
    }

    rightPlayer(player)
    {
        let diff = this.pos.y - (player.pos.y - player.h/2);
        let angle = map(diff, 0, player.h, radians(225), radians(135));
        this.velx = this.speed * cos(angle);
        this.vely = this.speed * sin(angle);
        //this.pos.x = player.pos.x + player.w/2+this.r;
    }

    edgeCheck()
    {
        if (collideLineCircle(0, height, width, height, this.pos.x, this.pos.y, this.r))
        {
            this.vely *= -1;
            this.pos.y = height - this.r / 2;
        }
        else if (collideLineCircle(0, 0, width, 0, this.pos.x, this.pos.y, this.r))
        {
            this.vely *= -1;
            this.pos.y = this.r / 2;
        }
    }

    update()
    {
        this.pos.x += this.velx;
        this.pos.y += this.vely;
    }

    reset()
    {
        this.pos.x = width / 2;
        this.pos.y = height / 2;
        let angle = random(-PI/4, PI/4);
        this.velx = 5 * Math.cos(angle);
        this.vely = 5 * Math.sin(angle);

        if (random(1) < 0.5)
        {
            this.velx *= -1;
        }
    }

    draw()
    {
        fill(255);
        //ellipse(this.pos.x, this.pos.y, this.r);
    }
}