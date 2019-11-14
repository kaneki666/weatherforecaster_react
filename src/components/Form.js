import React from 'react';

const Form = props => 
    (
        <form className="form" onSubmit={props.getWeather}>
            <span>
            <input type="text" name="city" placeholder="City"/>
            </span>
            <span>
            <input type="text" name="country" placeholder="Country" />
            </span>
            <button>Get Weather</button>
        </form>
    )

export default Form;