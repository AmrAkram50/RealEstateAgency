import React, {Component} from "react";
import Form from "./components/Form";
import WeatherList from "./components/WeatherList";

const API_KEY = "6489e34cbc7d3a3c947a26118b62beed";



class App extends Component {

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async(e) =>{
    e.preventDefault();
    console.log("weather")
    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();
    if(city && country){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    }
    else{
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please choose city and country'
      })
    }
  }
  render(){
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <WeatherList 
        tempreature={this.state.tempreature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
