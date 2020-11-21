import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Tag = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [tag, setTag] = useState('dog');
  const [gif, setGif] = useState('');

  const handleClick = () => {
    // getData(tag);
  };

  useEffect(() => {
    //getData(tag);
  }, [tag]);

  return (
    <div className='container'>
      <h1>Random {tag} GIF</h1>
      <img width='500' src={gif} alt='Random gif'></img>
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click for new</button>
    </div>
  );
};

export default Tag;
