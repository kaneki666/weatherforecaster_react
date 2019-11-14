import React from 'react';
import { WiHumidity,WiStrongWind,WiSunrise,WiSunset } from "weather-icons-react";

const Weather = props => 
     (
        <div>
             {
             props.date_time &&  props.date_day && <p className="temp_date"> 
                  { props.date_time }, { props.date_day }
             </p>
             }
          
              {
             props.temperature && <p className="temp_title">
                { props.temperature }°C
             </p>
            }
            {
             props.humidity && <p className="weather__key"> <WiHumidity size={40} color='#ffff' />
                 { props.humidity }%
             </p>
             }
             {
             props.speed && <p className="wind_speed"> <WiStrongWind size={40} color='#ffff' />
                 { props.speed }m/s
             </p>
             }
               {
             props.description && <p className="weather__condition"> 
                  { props.description }
             </p>
             }
               {
             props.date_time2 && props.date_day2 && <p className="temp_date"> 
                  { props.date_time2  }, { props.date_day2 }
             </p>
             }
            
            
            {
             props.temperature2 && <p className="temp_title">
                { props.temperature2 }°C
             </p>
            }
            {
             props.humidity2 && <p className="weather__key"><WiHumidity size={40} color='#ffff' />
                 { props.humidity2 }%
             </p>
             }
              {
             props.speed2 && <p className="wind_speed"> <WiStrongWind size={40} color='#ffff' />
                 { props.speed2 }m/s
             </p>
             }
          
             {
             props.description2 && <p className="weather__condition">
                  { props.description2 }
             </p>
             }
                {
             props.date_time3 && props.date_day3 && <p className="temp_date">
              {  props.date_time3 },  { props.date_day3 }
             </p>
             }
            {
             props.temperature3 && <p className="temp_title">
                { props.temperature3 }°C
             </p>
            }
           
            
              {
             props.humidity3 && <p className="weather__key"><WiHumidity size={40} color='#ffff' />
                 { props.humidity3 }%
             </p>
             }
              {
             props.speed3 && <p className="wind_speed"> <WiStrongWind size={40} color='#ffff' />
                 { props.speed3 }m/s
             </p>
             }
             {
             props.description3 && <p className="weather__condition">
                 { props.description3 }
             </p>
             }
            
             
            { 
            props.city && props.country && <p className="country">
                 { props.city },{ props.country }
             </p>
            } 
              {
             props.city && props.country && <p className="timenow">
                 { props.time_now }
             </p>
             }  
             {
             props.city && props.country && <p className="temperature_now">
                 Now { props.temperature_now }°C
             </p>
             }
               {
             props.city && props.country && <p className="weather__condition">
                 <WiSunrise size={40} color='#ffff' />
                 { props.sunrise }
             </p>
             }
              {
             props.city && props.country && <p className="weather__condition">
                 <WiSunset size={40} color='#ffff' />
                 { props.sunset }
             </p>
             }
            {
             props.error && <p className="weather__error">
                  { props.error }
             </p>
             }
        </div>
    )

export default Weather;