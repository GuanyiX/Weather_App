import React from 'react';
import FurWeather from './Components/FurWeather';
import CurWeather from './Components/CurWeather';
import './AppStyle/wrapperStyle/wrapperStyle.css';



class App extends React.Component {

  render() {
    
    return (
      <div className="wea_app_wrapper">
        <CurWeather />
        <FurWeather />
      </div>
    )

  }

}

export default App;
