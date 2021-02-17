// Creating child class - bird From ParentClass - BaseClass
class Bird extends BaseClass {
   //Initializing Constructor 
  constructor(x, y) {
     // Calling the parent Class 
    super(x,y,50,50)
    //Overriding image which is unique to bird
    this.image = loadImage("sprites/bird.png")
    };

    display(){
  //Moving the bird along the mouse
  this.body.position.x = mouseX;
  this.body.position.y = mouseY;
  //Calling display function of the parent
  super.display()

    }
  };
  