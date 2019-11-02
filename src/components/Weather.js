import React, { Component } from 'react';


class Weather extends Component {


    getTime = () =>{
        const time = new Date();
        const d = time.toDateString();
        return d;
    }
  
    render(){

      return(
          <div className='text-left info '>
              <p className='text-center'>Weather for the day: {this.getTime()}</p>
              {this.props.city && this.props.country && <p className='margine'>Location: {this.props.city}, {this.props.country}</p>}
              {this.props.temperature && <p className='margine'>Temperature: {this.props.temperature}°C</p>}
              {this.props.humidity && <p className='margine'>Humidity: {this.props.humidity}%</p>}
              {this.props.description && <p className='margine'>Description: {this.props.description}{' '}<img className='img-responsive' src={this.props.icon} alt=''></img>
</p>}
              {this.props.error && <p className='margine'>{this.props.error}</p>}

          </div>
      );
    }
}

export default Weather;
