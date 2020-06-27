class Paper{
    constructor(){
var option ={
    restitution : 0.3,
    friction : 0.5,
    density :1.2
}
this.body= Bodies.circle(100,50,40,option)
World.add(world,this.body)
    }
display(){
    var pos = this.body.position
    circle(pos.x,pos.y,40)
}
}