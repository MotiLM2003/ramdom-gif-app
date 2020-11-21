import React from 'react';

import Random from './Random_V1';
import '../app.css';
import Tag from './Tag_V1';

const App = () => {
  return (
    <div>
      <h1>Random GIF Application</h1>
      <div className='main-container'>
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
