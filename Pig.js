// Creating Child Class Pig using Parent Class Base Class
class Pig extends BaseClass {
    constructor(x, y) {
     // Calling parent Class
      super(x,y,50,50)
     //Overriding Image from ParentClass
      this.image = loadImage("sprites/enemy.png")
    }
  };
  