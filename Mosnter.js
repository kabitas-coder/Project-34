class Monster {

constructor (x,y,width,height)


{ 
        
         var options = {
          restitution : 0.1,
          fristion : 0.1,
          density : 3
       }
       this.image = loadImage ("Monster-01.png,Monster-02.png");
          this.body =Bodies.circle(this.x,this.y,options);
          this.add (world, this.body);
         
   }

          display ()
          {
            var pos = this.body.position;
            var angle = this.body.angle;
                push();
                rectMode(CENTER);
                fill("white");
               rect (0,0,this.width, this.height);
                pop();
                
                    }

         }
        
                   
    

