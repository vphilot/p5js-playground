var lineX = 0;
const url = 'http://api.open-notify.org/iss-now.json?callback=?';
var issX;
var issY;

function setup() {
    createCanvas(600,400);
    loadJSON(url, gotData, 'jsonp');
}

function gotData(data){
    let lat = data.iss_position.latitude;
    let long = data.iss_position.longitude;
    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -90, 180, 0, height);
}

function draw() {
    background(51);

    fill(255);
    ellipse(issX, issY, 24, 24);
    
    stroke(255);
    line(lineX, 0, lineX, height);
    lineX += 5;
    if (lineX > width){
        lineX = 0;
    }

}
