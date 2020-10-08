import React from 'react';
import CurWeaInfo from './CurWeaInfo';
import '../AppStyle/curWeaStyle/curWeaStyle.css';

const url = "http://localhost:5000";

class CurWeather extends React.Component {

    constructor() {
        super()

        this.state = {
            city: "SYDNEY",
            weather: "",
            temp: "",
            humidity: "",
            wind_speed: ""
        }
    }

    updateWeather(data) {
        this.setState({
            weather: data.current.weather[0].main,
            temp: (data.current.temp - 273).toFixed(2),
            humidity: data.current.humidity,
            wind_speed: data.current.wind_speed
        })
    }

    componentDidMount() {
        setInterval(() => {
            fetch(url)
                .then(
                    (res) => res.json()
                ).then(
                    (data) => {
                        this.updateWeather(data.data)
                    }
                ).catch(
                    (err) => console.log(err)
                );
        }, 1000)
    }

    render() {
        return (
            <div className="cur_wea_wrapper flex-container">
                <div className="city_name_wrapper flex-item">
                    <div className="city_name">{this.state.city}</div>
                    <div className="line"></div>
                </div>
                <CurWeaInfo
                    temp={this.state.temp}
                    weather={this.state.weather}
                    humidity={this.state.humidity}
                    wind_speed={this.state.wind_speed}
                />
            </div>
        )
    }
}

export default CurWeather;