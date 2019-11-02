import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8e3ee5f65d06249b2f4af71edb68a14f';

class App extends Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon_url: undefined,
    error: undefined
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    //if the input fields are not empty set the state
    if(city && country){
    this.setState({
      temperature: data.main.temp,
      city:  data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon_url: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      error: ''
      
    });
  } else{
    this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon_url: undefined,
    //else display error message
    error: 'Please enter a city and a country'
    });

  }

  }

    render(){
      return(
          <div className='weather'>
            <Title />
            <Form getWeather={this.getWeather}/>
            <Weather 
            getTime={this.getTime}
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon_url}
            error={this.state.error}
            
            />
          </div>
      );
    }
}

export default App;
