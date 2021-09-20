class Canon{
    constructor(x, y, w, height, angle){
        this.width = w;
        this.height = height;
        this.angle = angle;

        this.x = x;
        this.y = y;
    }

    display(){
        fill("black");
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        pop();
        arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    }
}