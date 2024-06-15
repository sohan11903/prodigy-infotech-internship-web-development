const apiKey = "3ddb0f6f6696dbedbd7f5aee054dbca8";

async function fetchWeatherData(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!res.ok) {
      alert("Unable to fetch weather data");
    }
    const data = await res.json();
    console.log(data);
    updateWeatherUI(data);
  } catch (err) {
    console.log(err);
  }
}

const cityEle = document.querySelector(".city");
const desc = document.querySelector(".description-text");
const temp = document.querySelector(".temp");
const windSpeed = document.querySelector(".wind-speed");
const humPer = document.querySelector(".humidity");
const visDis = document.querySelector(".visibility-distance");
const date = document.querySelector(".date");
const descIcon = document.querySelector(".description i");

function updateWeatherUI(data) {
  cityEle.textContent = data.name;
  desc.textContent = data.weather[0].main;
  temp.textContent = `${Math.round(data.main.temp)}`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
  humPer.textContent = `${data.main.humidity}%`;
  visDis.textContent = `${data.visibility / 1000} km`;
  const currDate = new Date();
  date.textContent = currDate.toDateString();
  const iconName = getWeatherIconName(data.weather[0].main);
  descIcon.innerHTML = `<i class="material-icons">${iconName}</i>`;
}

const inputEle = document.querySelector(".city-input");
const formEle = document.querySelector(".search-form");

formEle.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = inputEle.value;
  if (city !== "") {
    fetchWeatherData(city);
    inputEle.value = "";
  }
});

function getWeatherIconName(xyz) {
  const iconMap = {
    Clear: "wb_sunny",
    Clouds: "wb_cloudy",
    Rain: "umbrella",
    Thunderstorm: "flash_on",
    Drizzle: "grain",
    Snow: "ac_unit",
    Mist: "cloud",
    Smoke: "cloud",
    Haze: "cloud",
    Fog: "cloud",
  };
  return iconMap[xyz] || "help";
}
