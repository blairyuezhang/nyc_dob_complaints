//===============================
//  Streets sorted by Categories
//===============================

var complaints;
var complaintCodes;
var sortedStreets;
var whichStreet = 0;
var code;

function preload(){
    complaints = loadJSON("data/complaints.json");
    complaintCodes = loadJSON("data/complaintCodes.json");
} 

function setup() {
 
    //Make the canvas and then insert it into a div
    createCanvas(windowWidth, windowHeight);
    background("white");  
    textAlign(CENTER);
    rectMode(CORNER);
      
   //count the complaints per street
    var streets = {};
    for (var i = 0; i < complaints.data.length; i++) {
        var cCode = complaints.data[i][16];

        

        streets[cCode] = 1 + (streets[cCode] || 0);
    }

    //sort them
    sortedStreets = sortHighLow(streets);   

}

function draw() {

    textSize(50);

    code = sortedStreets[whichStreet][0];
    
    if (complaintCodes[code]){


    var complaints = complaintCodes[code]["category"];

    if (complaintCodes[code]["priority"].indexOf("A") > -1){

        background("red");
        
        fill("white");
        text(sortedStreets[whichStreet][1],windowWidth/2,150);
        
        fill("white");
        text(complaints,0,260,windowWidth, 250);


        fill("white");
        text("Priority Level A",windowWidth/2, 500);
    }else if (complaintCodes[code]["priority"].indexOf("B") > -1){
        background("orange");
        
        fill("white");
        text(sortedStreets[whichStreet][1],windowWidth/2,150);
        
        fill("white");
        text(complaints,0,260,windowWidth, 250);

        fill("white");
        text("Priority Level B",windowWidth/2, 500);
    }else if (complaintCodes[code]["priority"].indexOf("C") > -1){
        background("yellow");

        fill("black");
        text(sortedStreets[whichStreet][1],windowWidth/2,150);
        
        fill("black");
        text(complaints,0,260,windowWidth, 250);

        fill("black");
        text("Priority Level C",windowWidth/2, 500);
    }else if (complaintCodes[code]["priority"].indexOf("D") > -1){
        background("green");
       
        fill("black");
        text(sortedStreets[whichStreet][1],windowWidth/2,150);
       
        fill("black");
        text(complaints,0,260,windowWidth, 250);

        fill("black");
        text("Priority Level D",windowWidth/2, 500);
    }
   

    
    
    fill("#5CA4A9");
    text("There have been",windowWidth/2,100);

    

    fill("#5CA4A9");
    text("complaints about",windowWidth/2,200);



    
    

}

}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if(whichStreet !==sortedStreets.length-1){
        whichStreet++;
    }

  } else if (keyCode === UP_ARROW) {
    if(whichStreet !== 0){
        whichStreet--;
    }
  }
}


