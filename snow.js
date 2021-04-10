class Snow {
    constructor (x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x,y,30,options);
        Matter.World.add(world, this.body);
        this.radius = 30;
        this.image = loadImage("snow5.webp");
    
    }
    display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            fill("white")
            image(this.image,0, 0, this.radius,this.radius);
            pop();
            }
    } 
    