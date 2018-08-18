//somethig
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends Component {

	constructor(props) {
		super(props);
	}

  render() {


    return (
    <div className= "Wrapper">
    		<div className="Card">
        {this.props.title}
        <div>{this.props.swag}</div>
      </div>
    </div>
    );
  }
}

export default Card;
