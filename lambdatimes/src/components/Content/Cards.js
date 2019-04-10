import Card from './Card';
import PropTypes from 'prop-types';
import React from 'react';


const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>
        <Card
          key={props.target}
          key={card.headline}
          card={card}
        />
      )}
          </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes ={
  card:PropTypes.arrayOf(PropTypes.object)
}
export default Cards;