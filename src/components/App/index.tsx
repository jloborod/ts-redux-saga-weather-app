import * as React from 'react';

import './App.css';

import Weather from '../Weather';
import WeatherForm from '../WeatherForm';

const App = () => (
  <div className='App'>
    <header>
      <div className='logo' role='image' aria-label='logo' />
      <h2>Weather App</h2>
    </header>
    <main>
      <WeatherForm />
      <Weather />
    </main>
  </div>
);

export default App;
