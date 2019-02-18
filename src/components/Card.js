import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="name">
                    <h3>Name:</h3>
                    <p>{ this.props.name }</p> 
                </div>
                
                <div className="description">
                    <h3>Description:</h3>
                    <p>{ this.props.description }</p> 
                </div>
                
                <div className="revenue">
                    <h3>Revenue:</h3>
                    <p>${ this.props.revenue }</p> 
                </div>
                
                <div className="timestamp">
                    <h3>Timestamp:</h3>
                    <p>{ this.props.timestamp }</p> 
                </div>
            </div>
        );
      }
}

export default Card;
