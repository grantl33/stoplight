import './App.css';
import { useEffect, useState } from 'react';

// Stoplight has the following durations:
// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms
const config = {
  red: {
    duration: 4000,
    next: 'yellow'
  },
  yellow: {
    duration: 500,
    next: 'green'
  },
  green: {
    duration: 3000,
    next: 'red'
  }
}

function App() {
  const [color, setColor] = useState('red');
  let stoplightClasses = ['stoplight'];
  stoplightClasses.push(color);

  useEffect(() => {
    const { next, duration } = config[color];
    const timeout = setTimeout(() => setColor(next), duration);

    return () => {
      // cleanup
      clearTimeout(timeout);
    }
  }, [color])

  return (
    <div className="App">
      <header className="">
        <h1>Stoplight Demo</h1>
      </header>
      <main>
        <div className={stoplightClasses.join(' ')}>
          <div className='light'></div>
          <div className='light'></div>
          <div className='light'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
