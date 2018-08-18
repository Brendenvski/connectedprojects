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
      <div className="Card">
        {this.props.title}
      </div>
    );
  }
}

export default Card;
