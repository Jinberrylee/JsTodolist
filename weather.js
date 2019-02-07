const API_KEY = "16a5a0f27dc8b6bcd35aeec6fef699b5";
const COORDS = "coords";



function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}

function handleG

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords == null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords)
  }
}

function init() {

}

init();
