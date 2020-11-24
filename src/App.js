import React,{ useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>React Counter App using state/hooks</h1>
      </header>
        <h2>Current value of count is {count}</h2>
        <button onClick={() => setCount(0)}>Reset Counter</button>
        <button onClick={() => setCount((count >= 10 ? alert('You have reached the limit') : (count + 1)))}>Increase Counter</button>
        <button onClick={() => setCount((count == 0 ? alert('counter has been reseted') : (count - 1)))}>Decrease Counter</button>
    </div>
  );
}

export default App;
