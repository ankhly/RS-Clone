import { LocalStorageKeys } from '../utils/types';

export const weatherLogic = async (): Promise<void> => {
  const weatherIcon = document.querySelector('.weather-icon') as HTMLElement;
  const temperature = document.querySelector('.temperature') as HTMLInputElement;
  const weatherDescription = document.querySelector('.weather-description') as HTMLInputElement;
  const wind = document.querySelector('.wind') as HTMLInputElement;
  const humidity = document.querySelector('.humidity') as HTMLInputElement;
  const weatherError = document.querySelector('.weather-error') as HTMLInputElement;
  const city = document.querySelector('.city') as HTMLInputElement;
  city.value = localStorage.getItem(LocalStorageKeys.city) || city.value;

  const baseURL: string = 'https://api.openweathermap.org';
  const getWeather = async (): Promise<void> => {
    const url =
      `${baseURL}/data/2.5/weather?q=${city.value}&lang=ru&appid=ecea04712645dfb0bce29087590fddfd&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `${Math.round(data.main.humidity)}%`;
      weatherError.textContent = weatherError.value;
    } catch {
      weatherError.textContent = 'Ошибка! Неверное название города или страны!';
      temperature.textContent = temperature.value;
      weatherDescription.textContent = weatherDescription.value;
      wind.textContent = wind.value;
      humidity.textContent = humidity.value;
    }
  };
  await getWeather();

  city.addEventListener('change', () => {
    localStorage.setItem(LocalStorageKeys.city, city.value);
    getWeather();
  });

  const setLocalStorageCity = (): void => {
    localStorage.setItem(LocalStorageKeys.city, city.value);
  };
  window.addEventListener('beforeunload', setLocalStorageCity);
};
