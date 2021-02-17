// Creating Parent Class
class BaseClass {
    //Passing Arguments Needed for the Children Class
    constructor(x, y, width, height,angle) {
        // Giving options For Creating Bodies
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
     // Creating Body
      this.body = Bodies.rectangle(x, y, width, height, options);
     //Creating properties of width and Height 
      this.width = width;
      this.height = height;
      //Loading Image
      this.image = loadImage("sprites/base.png")
      // adding the body to the World
      World.add(world, this.body);
    }
    display(){
      //Namespacing for Angle
      var angle = this.body.angle;
     // Giving Settings 
      push();
      // As the Body keeps rotating the positions of Body keeps changing on its own axis
      translate(this.body.position.x, this.body.position.y);
      // Rotating the Body at An angle
      rotate(angle);
     //Centering Image
      imageMode(CENTER)
     //Adding the Image
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  };