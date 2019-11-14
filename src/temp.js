import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = 'a0d0f143ca6156a35961f040cee270c6';

class App extends React.Component {

  state = {
    temperature: undefined,
    temperature2: undefined,
    temperature3: undefined,
    city: undefined,
    country: undefined,
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
    error: undefined

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (city && country) {
      console.log(data);

    this.setState({
      temperature: data.list[2].main.temp,
      temperature2: data.list[5].main.temp,
      temperature3: data.list[8].main.temp,
      city: data.city.name,
      country: data.city.country,
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
      error: ""
    })
  } else {
      this.setState({
        temperature: undefined,
        temperature2: undefined,
        temperature3: undefined,
        city: undefined,
        country: undefined,
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
        error: "Please Enter The Value"
      })
  }
    }
  render () {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
              
                <div className= "col-sm-3 form-container">
                <Weather                                      
                    temperature= {this.state.temperature}
                    humidity= {this.state.humidity}
                    date_time = {this.state.date_time}
                    date_day = {this.state.date_day2}
                    description= {this.state.description}                   
                  />
                </div>
                <div className="col-sm-3 form-container">
                  <Weather
                    temperature2= {this.state.temperature2}
                    humidity2= {this.state.humidity2}
                    date_time2 = {this.state.date_time2}
                    date_day2 = {this.state.date_day2}
                    description2= {this.state.description2}
                   />
                </div>
                <div className="col-sm-3 form-container">
                  <Weather 
                    temperature3= {this.state.temperature3}  
                    humidity3= {this.state.humidity3} 
                    date_time3 = {this.state.date_time3} 
                    date_day3 = {this.state.date_day3} 
                    description3= {this.state.description3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

        
        
export default App;