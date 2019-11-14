import React from 'react';

import Form from './components/Form';
import Weather from './components/Weather'


const API_KEY = 'a0d0f143ca6156a35961f040cee270c6';

class App extends React.Component {

  state = {
    temperature_now: undefined,
    temperature: undefined,
    temperature2: undefined,
    temperature3: undefined,
    city: undefined,
    country: undefined,
    time_now: undefined,
    date_time: undefined,
    date_time2: undefined,
    date_time3: undefined,
    date_day: undefined,
    date_day2: undefined,
    date_day3: undefined,  
    humidity: undefined,
    humidity2: undefined,
    humidity3: undefined,
    description: undefined,
    description2: undefined,
    description3: undefined,
    speed: undefined,
    speed2: undefined,
    speed3: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const api_current = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const current_data = await api_current.json();
    
    if (city && country) {


    this.setState({
      temperature_now: current_data.main.temp,
      temperature: data.list[2].main.temp,
      temperature2: data.list[5].main.temp,
      temperature3: data.list[8].main.temp,
      city: data.city.name,
      country: data.city.country,
      time_now:  new Date().toLocaleTimeString(),
      date_time: new Date(data.list[2].dt_txt).toLocaleTimeString(),
      date_time2: new Date(data.list[5].dt_txt).toLocaleTimeString(),
      date_time3: new Date(data.list[8].dt_txt).toLocaleTimeString(),
      date_day: new Date(data.list[2].dt_txt).toDateString(),
      date_day2: new Date(data.list[5].dt_txt).toDateString(),
      date_day3: new Date(data.list[8].dt_txt).toDateString(),
      humidity: data.list[2].main.humidity,
      humidity2: data.list[5].main.humidity,
      humidity3: data.list[8].main.humidity,
      description: data.list[2].weather[0].description,
      description2: data.list[5].weather[0].description,
      description3: data.list[8].weather[0].description,
      speed: data.list[2].wind.speed,
      speed2: data.list[5].wind.speed,
      speed3: data.list[8].wind.speed,
      sunrise: new Date(current_data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(current_data.sys.sunset * 1000).toLocaleTimeString(),
      error: ""
    })
  } else {
      this.setState({
        temperature_now: undefined,
        temperature: undefined,
        temperature2: undefined,
        temperature3: undefined,
        city: undefined,
        country: undefined,
        time_now: undefined,
        date_time: undefined,
        date_time2: undefined,
        date_time3: undefined,
        date_day: undefined,
        date_day2: undefined,
        date_day3: undefined,
        humidity: undefined,
        humidity2: undefined,
        humidity3: undefined,
        description: undefined,
        description2: undefined,
        description3: undefined,
        speed: undefined,
        speed2: undefined,
        speed3: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Please Enter The Value"
      })
  }
    }
  render () {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        
            <div className=" container grid-container ">
            <div className= "col temp-2">
                <Weather                                      
                    city = {this.state.city}
                    country = {this.state.country}
                    time_now = {this.state.time_now}
                    temperature_now = {this.state.temperature_now}
                    sunrise = {this.state.sunrise}
                    sunset = {this.state.sunset}
                                     
                  />
                </div>
                <div className= "col temp-1">
                
                <Weather                                      
                    temperature= {this.state.temperature}
                    humidity= {this.state.humidity}
                    date_time = {this.state.date_time}
                    date_day = {this.state.date_day2}
                    description= {this.state.description}
                    speed = {this.state.speed}                   
                  />
                </div>
              
                <div className="col temp-3">
                  <Weather
                    temperature2= {this.state.temperature2}
                    humidity2= {this.state.humidity2}
                    date_time2 = {this.state.date_time2}
                    date_day2 = {this.state.date_day2}
                    description2= {this.state.description2}
                    speed2 = {this.state.speed2}
                   />
                </div>
                <div className="col temp-4">
                  <Weather 
                    temperature3= {this.state.temperature3}  
                    humidity3= {this.state.humidity3} 
                    date_time3 = {this.state.date_time3} 
                    date_day3 = {this.state.date_day3} 
                    description3= {this.state.description3}
                    speed3 = {this.state.speed3}
                  />
                </div>
              </div>
              <Weather error = {this.state.error} />
            </div>
         
      
    );
  }

}

        
        
export default App;