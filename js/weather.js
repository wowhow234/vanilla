const API_KEY = "754cecc01ae0e9c6d499cc2708e33a08";

function GeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].description}`;

      // ---------------------------- 날씨 아이콘 넣기
      //1. class가 w-states인 부모 얻기
      const divweather = document.querySelector(".w-states");

      //2. 부모 내의 span 요소들 중에서 중간에꺼 가져오기
      // document.querySelector("#weather span:nth-child(2)");

      //3. 새로 삽입할 아이콘 생성
      const weatherIcon = document.createElement("img");
      const weatherIconCode = data.weather[0].icon;
      weatherIcon.src = `image/icons/${weatherIconCode}.png`;

      const temp = document.querySelector(".w-states span:last-child");
      temp.innerText = Math.round(`${data.main.temp}`) + " ℃";
      console.log(Math.round(`${data.main.temp}`));

      //4. 기온 앞에 아이콘 삽입
      divweather.insertBefore(weatherIcon, temp);

      const city = document.querySelector("#weather").lastElementChild;
      city.innerText = data.name;
    });
}

function GeoError() {
  alert("현재 위치에서 날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);
