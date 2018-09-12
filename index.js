


var sketchProc = function(processingInstance) {
    with (processingInstance) {
    	// ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ \\
    		var scX = screen.width;
			var scY = screen.height;

			var particlesArr = [];
			var clicked = 0;



			var setup = function(){
			  // document.getElementById('').style.cursor = 'none';
			  // size(scX,scY);
			  // background(102, 204, 255);
			  for(var i=0; i < scX/20; i++){
			    addParticle();
			  }
			};



			var draw = function(){
			  size(scX,scY);
			  background(102, 204, 255);
			  
			  drawParticles();
			  
			  
			  // fill(255);
			  // ellipse(mouseX, mouseY, scX/40, scX/40);
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
			      fill(255,255,0); noStroke();
			      ellipse(p.x+p.w/5, p.y-p.w/5, p.w, p.h);
			    fill(0);
			    ellipse(p.x, p.y, p.w, p.h);
			      // if(p.connected){
			        // strokeWeight(p.connected.weight);
			        // stroke(0);
			        // line(p.connected.x1,p.connected.y1, p.connected.x2,p.connected.y2);
			      // }
			      
			    // MOVE  
			      p.x += p.spdx;
			      p.y += p.spdy;
			      if(p.spdx < -1){
			        p.spdx += 0.1;
			      }
			      if(p.spdx > 1){
			        p.spdx -= 0.1;
			      }
			      
			      if(p.spdy < -1){
			        p.spdy += 0.1;
			      }
			      if(p.spdy > 1){
			        p.spdy -= 0.1;
			      }
			    // console.time('bounceEdge');
			    if(p.x < 0 || p.x > scX || p.y < 0 || p.y > scY){  
			      if(p.x < 0){
			        p.x = 1;
			        p.spdx *= -1;
			      }
			      if(p.x > scX){
			        p.x = scX-1;
			        p.spdx *= -1;
			      }
			      if(p.y < 0 ){
			        p.y = 1;
			        p.spdy *= -1;
			      }
			      if(p.y > scY){
			        p.y = scY-1;
			        p.spdy *= -1;
			      }
			    } 
			    else {  // MOVE BY MOUSE
			      if(dist(mouseX,mouseY, p.x,p.y) < scX/20+clicked){
			        if(p.x > mouseX){
			          p.x ++;
			          p.spdx++;
			        }
			        if(p.x < mouseX){
			          p.x --;
			          p.spdx--;
			        }
			        
			        if(p.y > mouseY){
			          p.y ++;
			          p.spdy++;
			        }
			        if(p.y < mouseY){
			          p.y --;
			          p.spdy--;
			        }
			      }
			    }
			    // console.timeEnd('bounceEdge');
			    
			    
			    for(var p2 of particlesArr){
			      if(p == p2){continue}
			      if(dist(p.x,p.y, p2.x, p2.y) < scX/10){
			        // p.connected = {
			        //   x1: p.x,
			        //   y1: p.y,
			        //   x2: p2.x,
			        //   y2: p2.y,
			        //   weight: dist(p.x,p.y, p2.x, p2.y)/50
			        // };
			        
			        
			          
			          // strokeWeight(dist(p.x,p.y, p2.x, p2.y)/50);
			          // stroke(255,255,0);
			          // line(p.x+p.w/7 ,p.y-p.w/7,p2.x+p.w/7 ,p2.y-p.w/7);
			        strokeWeight(dist(p.x,p.y, p2.x, p2.y)/50);
			        stroke(0);
			        line(p.x,p.y,p2.x,p2.y);
			      }
			    }
			  }
			}

			var mousePressed = function(){
			  clicked = scX/10;
			};
			var mouseReleased = function(){
			  clicked = 0;
			};


    	// ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ ~~~~~~~ \\
    } // WITH END
}// END

var canvas = document.getElementById('BG'); 
var processingInstance = new Processing(canvas, sketchProc); 