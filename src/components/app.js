import React from 'react';
import '../app.css';
import RandomGif from './RandomGif';

const App = () => {
  return (
    <div>
      <h1>Random GIF Application</h1>
      <div className='main-container'>
        <RandomGif />
        <RandomGif isSearch={true} />
      </div>
    </div>
  );
};

export default App;
