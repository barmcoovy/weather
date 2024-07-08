const API_KEY = "529a66f458100a6cb5337e8ad27acadf";

const weatherIcon = document.getElementById('weather-icon');
const weatherItem = document.getElementById('weather-item');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const notFound = document.getElementById('not-found');
const weatherDescription = document.getElementById('description');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');

async function getWeatherData(){
    const city = document.getElementById('city').value;
  const weatherData =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  
    .then(response=>response.json());

    if(weatherData.cod === '404'){
        if(weatherItem.classList.contains('flex')){
            weatherItem.classList.remove('flex');
            weatherItem.classList.add('hidden');
        }
        notFound.classList.remove('hidden');
        notFound.classList.add('flex');
        return;
    }
    else{
        if(notFound.classList.contains('flex')){
            notFound.classList.remove('flex');
            notFound.classList.add('hidden');
        }
        weatherItem.classList.remove('hidden');
        weatherItem.classList.add('flex');
        cityName.innerText = weatherData.name;
        temp.innerHTML = Math.round(weatherData.main.temp - 272.15) + "°C";
        weatherDescription.innerText = weatherData.weather[0].description;

        windSpeed.innerHTML = "<i class='fa-solid fa-wind'></i> "+ Math.round(weatherData.wind.speed * 3.6) + ' km/h';

        humidity.innerHTML = "<i class='fa-solid fa-droplet'></i> " + weatherData.main.humidity + '%';

        pressure.innerHTML = "<i class='fa-solid fa-scale-balanced'></i> " + weatherData.main.pressure + ' hPa';

        switch (weatherData.weather[0].description) {
            case "clear sky":
                weatherIcon.src = "assets/sunny.png";
                break;
            case "few clouds":
                weatherIcon.src = "assets/sun-cloud.png";
                break;
            case "overcast clouds":
                weatherIcon.src = "assets/cloudy.png";
                break;
            case "scattered clouds":
                weatherIcon.src = "assets/cloudy.png";
                break;
            case "broken clouds":
                weatherIcon.src = "assets/broken-clouds.png";
                break;
            case "shower rain":
                weatherIcon.src = "assets/shower-rain.png";
                break;
            case "rain":
                weatherIcon.src = "assets/rain.png";
                break;
            case "light rain":
                weatherIcon.src = "assets/rain.png";
                break;
            case "thunderstorm":
                weatherIcon.src = "assets/thunderstorm.png";
                break;
            case "snow":
                weatherIcon.src = "assets/snow.png";
                break;
            case "mist":
                weatherIcon.src = "assets/mist.png";
                break;
            default:
                break;
        }
    }
    
}