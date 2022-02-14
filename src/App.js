import React from "react";
//weather app
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form className="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autoFocus="on"
                  autoComplete="off"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm"
                />
              </div>
            </div>
          </form>
          <h1>Sydney NSW, Australia</h1>
          <ul>
            <li>Wednesday 22:00</li>
            <li>Partly Cloudy</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy icon"
                  className="weather-icon float-left"
                />
                <div className="float-left">
                  <span className="temperature">19</span>
                  <span className="units">
                    °C | <a href={null}>°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 77%</li>
                <li>Wind: 8 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
