import React, { Component } from 'react';

class Form extends Component {
  
    render(){
      return(
          <form className='text-center' onSubmit={this.props.getWeather}>
          <div className='form-group'>
          <input type='text' name='city' placeholder='city' className='form-control'></input>
          </div>
          <div className='form-group'>
            <input type='text' name='country' placeholder='country' className='form-control'></input>
          </div>
          <div className='form-group'>
          <button className='btn btn-info '>Give me the weather</button>

          </div>

          </form>
      );
    }
}

export default Form;
