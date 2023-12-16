import "./WeatherApp.css";
import searchIcon from "../assets/search.png";
import cloudIcon from "../assets/cloud.png";
import rainIcon from "../assets/rain.png";
import drizzleIcon from "../assets/drizzle.png";
import snowIcon from "../assets/snow.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import clearIcon from "../assets/clear.png";

const WeatherApp = () => {
  const apiKey = "b89dfd32e827f585f1b6c431bcf92e9e";
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let res = await fetch(url);
    let data = await res.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const weatherImage = document.getElementsByClassName("weather-image");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + " km/h";
    temperature[0].innerHTML = data.main.temp + "&deg;C";
    location[0].innerHTML = data.name + ", " + data.sys.country;
    if (data.weather[0].main === "Clouds") {
      weatherImage[0].innerHTML = `<img src=${cloudIcon} alt="" />`;
    } else if (data.weather[0].main === "Rain") {
      weatherImage[0].innerHTML = `<img src=${rainIcon} alt="" />`;
    } else if (data.weather[0].main === "Drizzle") {
      weatherImage[0].innerHTML = `<img src=${drizzleIcon} alt="" />`;
    } else if (data.weather[0].main === "Snow") {
      weatherImage[0].innerHTML = `<img src=${snowIcon} alt="" />`;
    } else if (data.weather[0].main === "Clear") {
      weatherImage[0].innerHTML = `<img src=${clearIcon} alt="" />`;
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloudIcon} alt="" />
      </div>
      <div className="weather-temp">24&deg;C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
