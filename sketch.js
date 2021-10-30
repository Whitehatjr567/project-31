const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var divisions = [];
var divisionHeight = 300;
var particles=[];
var plinkos = [];






function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(460,750,8800,20);
    /*division1 = new Division(350,750,20,300);
    division2 = new Division(240,750,20,300);
    division3 = new Division(130,750,20,300);*/
   
    static1 = new Plinko(220,480,20);
    static2 = new Plinko(140,480,20);
    static3 = new Plinko(300,480,20);
    static4 = new Plinko(380,480,20);
    static5 = new Plinko(60,480,20);
    static6 = new Plinko(180,400,20);
    static7 = new Plinko(100,400,20);
    static8 = new Plinko(260,400,20);
    static9 = new Plinko(340,400,20);
    static10 = new Plinko(30,400,20);
    static11 = new Plinko(420,400,20);
    division4 = new Division(2,750,20,10000);
    division5 = new Division(470,750,20,10000);

   for(i=0;i<=width;i=i+80){
       divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
   }
   /*for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
}
for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
}
for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
}
for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));

}*/




   
    

  

}





function draw() {
    background("black");
    Engine.update(engine);
    drawSprites();
   
    
    for(var k = 0;k < divisions.length; k++){
        divisions[k].display();
       }
       
    if(frameCount %60 === 0){
        particles.push(new Particle(random(width/2-30,width/2+30),10,10))
        
    }
    for(var h = 0; h < particles.length; h++){
        particles[h].display();
       }
     
      /* for(var j = 0;j < plinkos.length; j++){
        plinkos[j].display();
      }*/
       
    

    ground1.display();
    /*division1.display();
    division2.display();
    division3.display();*/
   
    static1.display();
    static2.display();
    static3.display();
    static4.display();
    static5.display();
    static6.display();
    static7.display();
    static8.display();
    static9.display();
    static10.display();
    static11.display();
    division4.display();
    division5.display();
    
    
     
        
}