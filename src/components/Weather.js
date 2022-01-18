import React from 'react';
import axios from "axios";

class Weather extends React.Component{
    constructor(){
        super()
        this.state = {lat: 0 , long: 0 , details: {}}
    }
    render(){
        return(
            <div>
            <p>latitude: {this.state.lat}</p>
            <p>longitude: {this.state.long}</p>
            <h2>Humidity: {this.state.details.humidity}</h2>
            {this.state.details.humidity > 45 && <p>This is too humid</p>}
            {/* <h2>temperature: {this.state.details.temp}</h2> */}
            
             </div>
        )
    }
    componentDidMount(){
     window.navigator.geolocation.getCurrentPosition((position) => {
         this.setState({lat: position.coords.latitude , long: position.coords.longitude,})
             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=b9ee1840f77111ba1545e9f8179c0919`).then((resp) =>{
                       this.setState({details: resp.data.main})
             });
     })
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
}
export default Weather;