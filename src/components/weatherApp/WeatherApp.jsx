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
    </div>
  );
};

export default WeatherApp;
