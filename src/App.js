import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import InfoApp from './Components/InfoApp';
import WeatherForm from "./Components/WeatherForm"
import WeatherInfo from "./Components/WeatherInfo"

const api = {
  key: "be8e50436cd1cd32bfadf4bdcfc1ab8f",
  base: "https://api.openweathermap.org/data/2.5/",
};
class App extends Component {
  state = {
    temperature: "",
    description: "",
    icon: "",
    humidity: "",
    wind_speed: 0,
    city: "",
    country: "",
    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      // metric parameter is for Celcius Unit
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${api.key}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null,
      });
    } else {
      this.setState({
        error: "Please enter a City.",
      });
    }
  };

  render() {
    return (
      <div >
        <Header />
          <InfoApp/>
          <div className="row p-2">
            <div className="mx-auto">
              <WeatherForm getWeather={this.getWeather} />
              {this.state.city &&  <WeatherInfo  {...this.state} /> }
            
            </div>
          </div>
      </div>
    );
  }
}


export default App;
