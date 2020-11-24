import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useGif = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('dog');
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  const getData = useCallback(async () => {
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
  }, [url]);

  useEffect(() => {
    getData(tag);
  }, [tag, getData]);

  // debounce callback
  const debounce = (newTag) => {
    let timer = null;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setTag(newTag);
    }, 1000);
  };

  return [gif, tag, setTag, getData];
};

export default useGif;
