function setup() {
  createCanvas(600, 600);
}
function createTile(originX, originY, bkColor, outCircleColor, discColor, centerDotColor) {
  translate(originX, originY);
  fill(bkColor);
  rect(0, 0, 200, 200);
  fill(outCircleColor);
  noStroke();
  ellipse(100, 100, 170, 170);
  fill('#FECEAB');
  noStroke();
  ellipse(100, 100, 130, 130);
  fill('#99B898');
  noStroke();
  ellipse(100, 100, 100, 100);
  fill(discColor);
  strokeWeight(5);
  arc(50, 50, 100, 100, QUARTER_PI, PI+QUARTER_PI);
  arc(150, 150, 100, 100, PI+QUARTER_PI, QUARTER_PI,);
  fill(centerDotColor);
  noStroke();
  ellipse(100, 100, 30, 30);
}

function draw() {
  createTile(0, 0, '#2A363B', '#E84A5F', '# FF847C', '#FECEAB');
  createTile(0, 200, '#FF8C94', '#FFAAA6', '# FFD3B5', '#DCEDC2');
  createTile(0, 200, '#363636', '#474747', '#CC527A ', '#A8A7A7');
  createTile(200, -400, '#2F9599', '#F7DB4F', '#F26B38', '#EC2049');
  createTile(0, 200, '#FF4E50', '#474747', '#FF847C', '#FECEAB');
  createTile(0, 200, '#2F9599 ', '#FC913A', '#FF847C', '#F9D423');
  createTile(200, -400, '#FE4365 ', '#E84A5F', '#45ADA8', '#FECEAB');
  createTile(0, 200, '#594F4F', '#474747', '#FF847C', '#FECEAB');
  createTile(0, 200, '#2A363B', '#9DE0AD', '#FF847C', '#FECEAB');
}
