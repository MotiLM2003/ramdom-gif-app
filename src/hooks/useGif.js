import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('dog');
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    getData(tag);
  }, [tag, getData]);

  return [gif, tag, getData];
};

export default useGif;
