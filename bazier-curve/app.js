
   function renderCanvas1() {
    var canvas = document.getElementById("canvas1");
	if( canvas && canvas.getContext("2d") ) {
		var context = canvas.getContext("2d");  
 
		context.lineWidth= 6;
		context.beginPath();
		context.moveTo(0, 0);
		context.bezierCurveTo(100, 100, 100, 300, 200, 0);
		context.strokeStyle= "blue";
		context.fillStyle= "orange";
		context.stroke();
		context.fill();
    }
   }
   
  
    

function renderCanvas2() {
    var canvas2 = document.getElementById("canvas2");
	if( canvas2 && canvas2.getContext("2d") ) {
		 var context2 = canvas2.getContext('2d');
        context2.fillStyle= "green";
        context2.beginPath();
        context2.moveTo(75, 50);
        context2.lineTo(100, 75);
        context2.lineTo(100, 25);
        context2.fill();
     
    }
}

function renderCanvas3() {
    var canvas3 = document.getElementById("canvas3");
	if( canvas3 && canvas3.getContext("2d") ) {
		var context3 = canvas3.getContext('2d');
        context3.beginPath();
        context3.arc(115, 75, 50, 0, Math.PI * 2, true);
        context3.moveTo(150, 75);
        
        context3.arc(115, 75, 35, 0, Math.PI, false);
        context3.moveTo(100, 65);

        context3.arc(95, 65, 5, 0, Math.PI * 2, true);
        context3.moveTo(140, 65);
        context3.arc(135, 65, 5, 0, Math.PI * 2, true);
        context3.stroke();
    }
    console.log('came');
}

function renderConvas4() {
        var canvas = document.getElementById('canvas4');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
      
          for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
              ctx.beginPath();
              var x = 25 + j * 50; // x coordinate
              var y = 25 + i * 50; // y coordinate
              var radius = 20; // Arc radius
              var startAngle = 0; // Starting point on circle
              var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
              var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
      
              ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      
              if (i > 1) {
                ctx.fill();
              } else {
                ctx.stroke();
              }
            }
          }
        }
      
}
renderCanvas1();
renderCanvas2();
renderCanvas3();
renderConvas4();