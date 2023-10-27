import React from 'react'
import Cards from '../../Assets/Cards'

const CardList = ({ cardData }) => {
  return (
    <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {cardData.map((card, index) => (
        <Cards key={index} data={card} style={{ maxWidth: '500px', flex: '1 1 300px' }} />
      ))}
    </div>
  );
};

export default CardList;

