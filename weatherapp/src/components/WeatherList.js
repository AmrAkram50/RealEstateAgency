import React from "react";

const WeatherList = (props) => {

    return(
        <div >
            
            (
                props.tempreature && <p>Tempreatue : {props.tempreature}</p>
            )
            (
                props.city && <p>City : {props.city}</p>
            )
            (props.country && <p>Country : {props.country}</p>)
            (props.humidity && <p>Humidity : {props.humidity}</p>)
            (props.description && <p>Description : {props.description}</p>)
        </div>
    )
    
            }

export default WeatherList;