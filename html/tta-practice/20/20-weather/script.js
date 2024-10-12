// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    getWeatherData(city);
});

async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const weatherData = await response.json();
        displayWeatherData(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = `${data.main.temp} °C`;
    document.getElementById('description').innerText = data.weather[0].description;
}
