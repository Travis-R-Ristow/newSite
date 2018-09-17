


var sketchProc = function(processingInstance) {
    with (processingInstance) {
    	// ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ \\
    		var scX = screen.width;
			var scY = screen.height;

			var triArr = [];




			var setup = function(){
			  // size(scX,scY);
			  // background(102, 204, 255);
			  // for(var i=0; i < scX/20; i++){
			  //   addParticle();
			  // }
			};



			var draw = function(){
			  size(scX,scY);
			  background(255);
			  
			  // drawParticles();
			  
			  
			  fill(0);
			  ellipse(100, 100, scX/10, scX/10);
			};

			function addParticle(){
			  particlesArr.push({
			    x: random(20,scX-20),
			    y: random(20,scY-20),
			    w: scX/150,
			    h: scX/150,
			    spdx: random(-0.5,0.5),
			    spdy: random(-0.5,0.5),
			    connected: false
			  });
			}


			function drawParticles(){
			  for(var p of particlesArr){
			  
			    // DRAW
			      
			    }
			}


    	// ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ \\
    } // WITH END
}// END

var canvas = document.getElementById('BG'); 
var processingInstance = new Processing(canvas, sketchProc); 