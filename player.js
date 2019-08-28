class Player
{
    constructor(x,y,w,h, left) {
        this.pos = createVector(x,y);
        this.w = w;
        this.h = h;
        this.score = 0;
        this.left = left;
    }

    draw() {
        fill(255);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);

        fill(0);
        textSize(32);
        if (this.left)
        {
            text(this.score, (width / 2) / 2, 50);
        }
        else
        {
            text(this.score, width / 2 + (width / 2) / 2, 50);
        }
    }
}