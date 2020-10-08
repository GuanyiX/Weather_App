import React from 'react';
import FurWeaImg from './FurWeaImg';

const url = "http://localhost:5000";

class FurWeaInfo extends React.Component {

    constructor() {
        super()

        this.state = {
            daysArr: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            day: [],
            temp: [],
            weather: []
        }
    }

    updateWeather(data) {

        this.setState({
            temp: [],
            weather: []
        })

        for (var i = 0; i < 5; i++) {
            this.setState({
                temp: [...this.state.temp, (data.daily[i+1].temp.day - 273).toFixed(2)],
                weather: [...this.state.weather, data.daily[i+1].weather[0].main]
            })
        }

    }

    updateDays(data) {

        this.setState({
            day: []
        })

        for (var i = 0; i < 5; i++) {
            this.setState({
                day: [...this.state.day, (new Date(data.daily[i+1].dt * 1000)).getDay()]
            })
        }
    }


    componentDidMount() {

        setInterval(() => {
            fetch(url)
                .then(
                    (res) => res.json()
                ).then(
                    (data) => {
                        this.updateWeather(data.data)
                        this.updateDays(data.data)
                    }
                ).catch(
                    (err) => console.log(err)
                );
        }, 1000)

    }

    render() {

        return (
            <div className="five_days_wrapper flex-item flex-container">
                <div className="day1_wrapper">
                    <p>{this.state.daysArr[this.state.day[0]]}</p>
                    <FurWeaImg
                        weather= {this.state.weather[0]}
                    />
                    <p>{this.state.temp[0]} °</p>
                    <p>{this.state.weather[0]}</p>
                </div>
                <div className="day2_wrapper">
                    <p>{this.state.daysArr[this.state.day[1]]}</p>
                    <FurWeaImg
                        weather= {this.state.weather[1]}
                    />
                    <p>{this.state.temp[1]} °</p>
                    <p>{this.state.weather[1]}</p>
                </div>
                <div className="day3_wrapper">
                    <p>{this.state.daysArr[this.state.day[2]]}</p>
                    <FurWeaImg
                        weather= {this.state.weather[2]}
                    />
                    <p>{this.state.temp[2]} °</p>
                    <p>{this.state.weather[2]}</p>
                </div>
                <div className="day4_wrapper">
                    <p>{this.state.daysArr[this.state.day[3]]}</p>
                    <FurWeaImg
                        weather= {this.state.weather[3]}
                    />
                    <p>{this.state.temp[3]} °</p>
                    <p>{this.state.weather[3]}</p>
                </div>
                <div className="day5_wrapper">
                    <p>{this.state.daysArr[this.state.day[4]]}</p>
                    <FurWeaImg
                        weather= {this.state.weather[4]}
                    />
                    <p>{this.state.temp[4]} °</p>
                    <p>{this.state.weather[4]}</p>
                </div>
            </div>
        )

    }
}

export default FurWeaInfo;