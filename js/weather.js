const API_KEY = "754cecc01ae0e9c6d499cc2708e33a08";

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const weatherIcon = document.createElement("img");
      const weatherIconCode = data.weather[0].icon;
      console.log(weatherIconCode);
      weatherIcon.src = `image/icons/${weatherIconCode}.png`;
      document.body.appendChild(weatherIcon);

      const temp = weather.nextElementSibling;
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main}`;

      temp.innerText = `${data.main.temp} ℃`;
      city.innerText = data.name;
      // console.log("데이터", data);
      console.log("아이콘", data.weather[0].icon);
    });
}

function GeoError() {
  alert("현재 위치에서 날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
