import React from 'react';
import useGif from '../hooks/useGif';

const RandomGif = () => {
  const [gif, setGif, getData] = useGif();

  const handleClick = () => {
    getData();
  };
  return (
    <div className='container'>
      <h1>Random GIF</h1>
      <img width='500' src={gif} alt='Random gif'></img>
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default RandomGif;
