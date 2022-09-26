var box1;
var box2

function setup() 
{
  createCanvas(400, 400);
box1 = new Box(100, 100, 50, 50)
box2 = new Box(200, 200, 20, 20)


}

function draw() 
{
  background(220);
box1.show()
box2.show()
box1.speed(2)
box2.speed(-2)

}

