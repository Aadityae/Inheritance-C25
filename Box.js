//Creating Child class Box using Parent class - BaseClass
class Box extends BaseClass {
  constructor(x, y, width, height) {
    // Calling the Parent Class
    super(x,y,width,height)
   //Overriding the Image for Box
    this.image = loadImage("sprites/wood1.png")

  }
};
