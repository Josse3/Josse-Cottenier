import React, { useEffect } from 'react';
import './App.css';

import Banner from './components/Banner/Banner';
import Developer from './components/Developer/Developer';

function App() {
  useEffect(() => {
    console.log(
      'Hi there fellow developer! 👋\nThe source code of this website can be found at https://github.com/Josse3/josse-cottenier. \nHappy forking! 😀'
    );
  }, []);

  return (
    <div className="App">
      <Banner />
      <Developer />
    </div>
  );
}

export default App;
