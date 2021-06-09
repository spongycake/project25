class Paper {
    constructor(x,y){
        var paper_options = {
            'density':1.2,
            'restitution':0.2,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,10,paper_options);
        this.image = loadImage("paper.png");
        this.image.scale = 0.5;
        World.add(world,this.body);
        
    }
    display(){
        
        var paperPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(paperPos.x,paperPos.y);
        imageMode(CENTER);
        image(this.image,0,0,45,45);
        pop();
        
    }
}
