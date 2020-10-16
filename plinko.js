class Plinko {
    constructor(x,y,r) {
        var options={
        "isStatic":true 
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color="white";
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        

        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}