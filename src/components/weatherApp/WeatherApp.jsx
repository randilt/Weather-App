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
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
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
            <div className="humidity-percentage">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
