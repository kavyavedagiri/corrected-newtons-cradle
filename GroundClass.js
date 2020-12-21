class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var body=this.body;
      var pos =body.position;
      push();
      rectMode(CENTER);
      fill("#ed62fc");
      stroke("black");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };