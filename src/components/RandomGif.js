import React, { useState } from 'react';
import useGif from '../hooks/useGif';
import useDebounce from '../hooks/useDebounce';

const RandomGif = ({ isSearch }) => {
  const [value, setValue] = useState('');
  const [gif, tag, setTag, getData] = useGif();

  const debounceCallback = useDebounce((nextvalue) => setTag(nextvalue), 500);

  const handleClick = (e) => {
    const nextValue = e.target.value;
    setValue(nextValue);

    debounceCallback(nextValue);
  };
  return (
    <div className='container'>
      <h1>Random {isSearch && tag}'s GIF</h1>
      <img width='500' src={gif} alt='Random gif'></img>
      <button onClick={handleClick}>Click for new</button>
      {isSearch && <input type='text' value={value} onChange={handleClick} />}
    </div>
  );
};

export default RandomGif;
