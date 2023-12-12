const API_KEY = "754cecc01ae0e9c6d499cc2708e33a08";

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const temp = weather.nextElementSibling;
      weather.innerText = `${data.weather[0].main}`;

      temp.innerText = `${data.main.temp} ℃`;
      city.innerText = data.name;
    });
}

function GeoError() {
  alert("현재 위치에서 날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
