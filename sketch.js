var weatherData;
var d, i = 0;

function setup() {
    createCanvas(200,200);
    loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca?&appid=24038fb8c6b405ee1ea31e37af50b8b1&?units=metric", gotData, 'jsonp');
}

function gotData(data){
    weatherData = data;
    print(weatherData);
    d = weatherData.main.temp - 273.15;
}

function draw() {
    background(0);
    if (weatherData){
        ellipse(50, 100, d + i, d);
        ellipse(150, 100, weatherData.main.humidity, weatherData.main.humidity);
        i+=0.5;
    }

}
