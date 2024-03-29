/*
     Name: Chris Manfredi
     Date: 8/4/14
     Class & Section:  WIA-0814
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

			window.onload = function() {
				var lab1Canvas = document.getElementById('Canvas1');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#54C8DA";
                        ctx.lineWidth = 3;
                        
                        ctx.fillRect(0,0,50,100);
                        ctx.strokeRect(0,0,50,100);
                        
					}
				}
            



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


				var lab1Canvas = document.getElementById('Canvas2');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#ED553B";
                        ctx.lineWidth = 15;
                        
                        var degrees = 360;
                        var radius = 30;
                        ctx.beginPath();
                        ctx.arc(50,50,20,0,radius);
                        ctx.fill();
                        ctx.stroke();   
                        
					}
				}
                
            
			




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
var lab1Canvas = document.getElementById('Canvas3');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#ED553B";
                        ctx.lineWidth = 5;
                        
                        ctx.beginPath();
                        ctx.moveTo(90,20);
                        ctx.lineTo(70,70);
                        ctx.lineTo(20,80);
                        ctx.lineTo(70,100);
                        ctx.lineTo(60,140);
                        ctx.lineTo(90,110);
                        ctx.lineTo(110,140);
                        ctx.lineTo(110,110);
                        ctx.lineTo(140,80);
                        ctx.lineTo(100,70);
                        ctx.lineTo(90,20);
                        ctx.stroke();
                        
					}
				}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var lab1Canvas = document.getElementById('Canvas4');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#ED553B";
                        ctx.lineWidth = 5;
                        ctx.beginPath();
                        ctx.moveTo(50,150);
                        ctx.bezierCurveTo(75,50,200,0,200,150);
                        ctx.stroke();
                        ctx.fill();
                        
                        ctx.beginPath();
                        ctx.moveTo(50,150);
                        ctx.bezierCurveTo(90,200,90,150,90,150);
                        ctx.stroke();
                        ctx.fill();
                        
                        ctx.beginPath();
                        ctx.moveTo(130,150);
                        ctx.bezierCurveTo(100,200,90,150,90,150);
                        ctx.stroke();
                        ctx.fill();
                        
                        ctx.beginPath();
                        ctx.moveTo(160,150);
                        ctx.bezierCurveTo(140,200,130,170,130,150);
                        ctx.stroke();
                        ctx.fill();
                        
                        ctx.beginPath();
                        ctx.moveTo(200,150);
                        ctx.bezierCurveTo(190,200,160,190,160,150);
                        ctx.stroke();
                        ctx.fill();
                    
                    }
                }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
var lab1Canvas = document.getElementById('Canvas5');
	if (lab1Canvas) {
	var ctx = lab1Canvas.getContext("2d");
	if (ctx) {
        var theString = "Web Interaction & Animation";
        ctx.font = "71pt Verdana";
        ctx.fillStyle = "Red";
        ctx.strokeStyle = "purple";
        ctx.fillText(theString, 20, 160);
        ctx.strokeText(theString, 20, 160);
        
        
    }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
    var lab1Canvas = document.getElementById('Canvas6');
	var ctx = lab1Canvas.getContext("2d");
    var logo = new Image();
    logo.src = "image/logo.png";
    logo.onload = function() {
        ctx.drawImage(logo,0, 0);
    }
            
            
    var lab1Canvas = document.getElementById('Canvas6');
	var ctx = lab1Canvas.getContext("2d");
    var logo = new Image();
    logo.src = "image/logo.png";
    logo.onload = function() {
        ctx.drawImage(logo,0, 0, 200, 200);
    }
    
    var lab1Canvas = document.getElementById('Canvas6');
	var ctx = lab1Canvas.getContext("2d");
    var logo = new Image();
    logo.src = "image/logo.png";
    logo.onload = function() {
        ctx.drawImage(logo, 0, 0, 200, 200, 0, 0, 200, 200)
    }
            }
	
        
    
/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
            
            var lab1Canvas = document.getElementById('Canvas7');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#54C8DA";
                        ctx.lineWidth = 3;
                        
                        ctx.fillRect(0,0,1420,300);
                        ctx.strokeRect(0,0,1420,300);
                        
					}
                    
                    var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "red";
                        ctx.lineWidth = 3;
                        
                        ctx.fillRect(25,25,1370,250);
                        ctx.strokeRect(25,25,1370,250);
                        
					}
                    
                        var lab1Canvas = document.getElementById('Canvas7');
	                    var ctx = lab1Canvas.getContext("2d");
                        var logo = new Image();
                        logo.src = "image/logo.png";
                        logo.onload = function() {
                        ctx.drawImage(logo,350, 70, 710, 150);
                    }
                        
                        var lab1Canvas = document.getElementById('Canvas7');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#128E62";
                        ctx.lineWidth = 15;
                        
                        var degrees = 360;
                        var radius = 90;
                        ctx.beginPath();
                        ctx.arc(150,150,90,0,radius);
                        ctx.fill();
                        ctx.stroke();   
                        
					}
				}
                    
                    var lab1Canvas = document.getElementById('Canvas7');
				if (lab1Canvas) {
					var ctx = lab1Canvas.getContext("2d");
					if (ctx) {
                        ctx.strokeStyle = "black";
                        ctx.fillStyle = "#128E62";
                        ctx.lineWidth = 15;
                        
                        var degrees = 360;
                        var radius = 90;
                        ctx.beginPath();
                        ctx.arc(1270,150,90,0,radius);
                        ctx.fill();
                        ctx.stroke();   
                        
					}
				}
                }


