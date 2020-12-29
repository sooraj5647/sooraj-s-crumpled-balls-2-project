class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('dusbingreen.png');

        World.add(world,this.body);
    }
    display() {
        fill("black");

        imageMode(CENTER);
        image(this.body.position.x,this.body.position.y,this.width,this.height,this.image);
    }
}