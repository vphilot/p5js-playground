var weatherData;

function setup() {
    createCanvas(200,200);
    loadJSON("https://api.openweathermap.org/data/2.5/weather?q=London&&appid=cdc1a2cf7a5d1e97671ffec64c6633f1", gotData, 'jsonp');
}

function gotData(data){
    weatherData = data;
}

function draw() {
    background(0);
    // stroke (255);
    // line(x, 0, x, height);
    // x++;
    // if (x > width) {
    //     x = 0;
    // }
    if (weatherData){
        randomSeed(4);
        print(weatherData);
        // for (var i = 0; i < spaceData.number; i++) {
        //     ellipse(random(width), random(height), 16, 16)
        // }
    }
}
