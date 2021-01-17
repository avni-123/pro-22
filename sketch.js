
var engine, world, object; //engine is like a universe, world is like a planet Earth, an objects are bodies are like humans which risides in the world

var ground;

function setup() {

  createCanvas(800,800);

  engine = Matter.Engine.create();

  world = engine.world;

  var options = {
    restitution : 2
  }

  object = Matter.Bodies.circle(400, 400, 40, options);

  var groundoptions = {
    isStatic : true
  }

  ground = Matter.Bodies.rectangle(5, 700, 800, 20, groundoptions);

  Matter.World.add(world, object);

  Matter.World.add(world, ground);

  console.log(object);
}

function draw() {
  background(0);
  
  Matter.Engine.update(engine);

  ellipseMode(RADIUS)

  ellipse(object.position.x, object.position.y, 40, 40);

  rect(ground.position.x , ground.position.y, 800, 20);
}
