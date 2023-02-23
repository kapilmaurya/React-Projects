import React, { Component } from 'react'
import Tseries from '../Assets/Tseries.jpg'

export default class Avtar extends Component {
    constructor(props){
        super(props)
        this.state={}
        
    }
    render() {
        return (
          <div
            className={`rounded-full overflow-hidden h-${this.props.size || 12} w-${
              this.props.size || 12
            }`}
          >
            <img src={this.props.src || Tseries} alt="avatart" />
          </div>
        );
      }
}
