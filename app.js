createCanvas(360,610);
background('#090A10');

let angle = 0;

function brach(len){
  
  ctx.moveTo(0,0);
  ctx.lineTo(0,-len);
  ctx.translate(0,-len);
  
  if(len>4){
    
    ctx.save();
    ctx.rotate(angle);
    brach(len*0.67);
    ctx.restore();
    
    ctx.save();
    ctx.rotate(-angle);
    brach(len*0.67);
    ctx.restore();
    
  }
  
}


function draw(){
  ctx.strokeStyle = 'white';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 2;
  angle = 0.55;
  ctx.translate(canvas.clientWidth/2,canvas.clientHeight);
  brach(100);
  ctx.stroke();
}

draw();