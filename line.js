class Line{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.1,
            length: 30
        }
        this.line= Constraint.create(options);
        World.add(world, this.line);
        
    }
    fly(){
      this.line.bodyA=null
    }
    // attach(body){
    //     this.line.bodyA=body
    // }

    display(){
 
        if(this.line.bodyA){
        var pointA = this.line.bodyA.position;
        var pointB = this.line.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
}
}