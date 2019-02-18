import React, { Component } from 'react';
import Card from './Card';
import '../styles/CardList.css';

class CardList extends Component {
  render() {
    return (
      <div className="cardList">
        { this.props.data.map(card => <Card key={card.id} {...card} />)}
      </div>
    );
  }
}

export default CardList;
