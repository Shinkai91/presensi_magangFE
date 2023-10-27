import React from 'react'
import CardList from '../../Components/User/CardList';
import Dates from '../../Assets/Date';


function Tugas() {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline : 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline : 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline : 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline : 'Deadline : 1 November 2023'
    },
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      deadline : 'Deadline : 1 November 2023'
    },
    // Tambahkan data kartu lainnya sesuai kebutuhan
  ];

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }} > <Dates/> </div>
      <h1 style={{marginBottom:"16px"}} >Tugas</h1>
      <CardList cardData={cardData} />
    </div>
  );
}

export default Tugas