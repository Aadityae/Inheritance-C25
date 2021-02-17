//Creating Child class Log Using parent class Base Class
class Log extends BaseClass {

    constructor(x, y, height, angle) {
     // calling Parent Class
      super(x,y,20,height,angle)
     //Overriding The Image
      this.image = loadImage("sprites/wood2.png")
     //Setting Angle unique to Log Class
      Matter.Body.setAngle(this.body,angle)
    }
  };
  