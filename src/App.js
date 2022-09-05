import React from 'react';
import WeatherCard from './components/cards/weather';

const preferences = {
  name: {
    first: 'Piero',
    last: 'Maddaleni'
  },
};

let helloStatement = `Hello ${preferences.name.first}!`;
const statements = [
  [22, 'Browsing before bed?'],
  [18, `Good Evening ${preferences.name.first}!`],
  [12, `Good Afternoon ${preferences.name.first}!`],
  [5, `Good Morning ${preferences.name.first}!`],
  [0, `Up late ${preferences.name.first}?`]
],
  hr = new Date().getHours();
for (var i = 0; i < statements.length; i++) {
  if (hr >= statements[i][0]) {
    helloStatement = statements[i][1]
    break;
  };
};

function App() {
  return (
    <main>
      <section className='card'>
        <h1>{helloStatement}</h1>
      </section>
      <WeatherCard/>
    </main>
  );
}

export default App;
