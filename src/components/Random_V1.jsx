// import Axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const Random = () => {
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   const [gif, setGif] = useState('');

//   useEffect(() => {
//     const getData = async () => {
//       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//       const { data } = await axios.get(url);
//       const imageSrc = data.data.images.downsized_large.url;
//       setGif(imageSrc);
//     };

//     getData();
//   }, []);

//   return (
//     <React.Fragment>
//       <h1>Random GIF</h1>
//       <img width='500' src={gif} alt='Random gif'></img>
//     </React.Fragment>
//   );
// };

// export default Random;
