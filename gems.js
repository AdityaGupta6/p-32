class Gems{
	constructor(x,y,r)
	{
		var options={
			density:1.2,
			restitution :0,
            friction :1,
            isStatic:true
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image1=loadImage("gem1.png")
		this.image2=loadImage("gem2.png")
		this.image3=loadImage("gem3.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
    remove(){
        push()
        World.remove(world,this.body)
        pop()
    }

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);

		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
        image(this.image1, 0,0,this.r*2, this.r*2)
		pop()
 }
}