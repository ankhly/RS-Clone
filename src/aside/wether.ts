const weatherIcon = document.querySelector('.weather-icon') as HTMLElement;
const temperature = document.querySelector('.temperature') as HTMLInputElement;
const weatherDescription = document.querySelector('.weather-description') as HTMLInputElement;
const wind = document.querySelector('.wind') as HTMLInputElement;
const humidity = document.querySelector('.humidity') as HTMLInputElement;
const weatherError = document.querySelector('.weather-error') as HTMLInputElement;
const city = document.querySelector('.city') as HTMLInputElement;

async function getWaeter() {
  const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ecea04712645dfb0bce29087590fddfd&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  try {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `скорость ветра: ${Math.round(data.wind.speed)} м/с`;
    humidity.textContent = `влажность: ${Math.round(data.main.humidity)}%`;
    weatherError.textContent = weatherError.value;
  } catch {
    weatherError.textContent = 'Ошибка! Введите город';
    temperature.textContent = temperature.value;
    weatherDescription.textContent = weatherDescription.value;
    wind.textContent = wind.value;
    humidity.textContent = humidity.value;
  }
}
getWaeter();

city.addEventListener('change', getWaeter);

function setLocalStorageCity() {
  localStorage.setItem('city', city.value);
  getWaeter();
}
window.addEventListener('beforeunload', setLocalStorageCity);

// function getLocalStorageCity() {
//   if (localStorage.getItem("city")) {
//     city.value = localStorage.getItem("city");
//     console.log(localStorage.getItem("city"));
//   }
//   getWaeter();
// }
// window.addEventListener("load", getLocalStorageCity);