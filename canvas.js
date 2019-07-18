/* createCanvas Description
* createCanvas function is used to return create a canvas element in the HTML page and a 2d context in which the line can be drawn
* @param {integer} height - the height of the canvas
* @param {integer} width - the width of the canvas
*Return - This function returns canvas element and canvas context.
*Function Call - Examples to call this function
1) var canvas = createCanvas(1000,1000);
2) var context = canvas.context;
*/
window.createCanvas = function(height, width){
  var canvas = document.createElement("CANVAS");
  console.log(canvas);
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext("2d");
  context.beginPath();
  return {
    canvas:canvas,
    context:context
  }
}

/* createLineCanvas Description
* createLineCanvas function is used to create a line from the defined x and y position inside the canvas.
The function also adds also adds a gradient color to the line.
* @param {object} context - the 2d context object of the canvas
* @param {integer} xpos - the x position of the end point of the line
* @param {integer} ypos - the y position of the end point of the line
* @param {integer} moveTo - the point at which the line starts
*Return - This function returns the context object after creating the line and gradient
*Function Call - Examples to call this function
1) var lineCanvas =createLineCanvas(canvasContext.context,100,100,500); 
2) var lineCanvas =createLineCanvas(canvasContext.context,xpos,ypos,lineMoveTo);
*/
window.createLineCanvas = function(context,xpos,ypos,moveTo){
  context.lineWidth = 10;
  if (typeof moveTo !== "undefined") {
    context.moveTo(moveTo.moveTo,moveTo.moveTo);
  }else {
    context.moveTo(500,500);
  }

  context.lineTo(xpos, ypos);
  var gradient = context.createLinearGradient(0, 0, 170, 0);
  gradient.addColorStop("0", "rgb(239, 148, 143)");
  gradient.addColorStop("0.5" ,"white");
  gradient.addColorStop("1.0", "rgb(239, 148, 143)");
  context.strokeStyle = gradient;
  context.stroke();
  return context
}
