import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [textMode, setTextMode] = useState('Click This');
  const [previousText, setPreviousText] = useState('Click This'); // State for previous text

  // Toggle text between previous text and "You Clicked"
  const handleTextClick = () => {
    if (textMode === 'You Clicked') {
      setTextMode(previousText); // Revert to previous text
    } else {
      setPreviousText(textMode); // Save current text before changing
      setTextMode('You Clicked'); // Change to "You Clicked"
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? '#333333' : '#ffffff', // Dark or light background
        color: darkMode ? '#ffffff' : '#000000', // Dark or light text color
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Count UseState Example */}
      <h1>Count: {count}</h1>
      <div className="counter">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      {/* Dark Mode Buttons */}
      <div className="counter">
      <button onClick={() => setDarkMode(true)}>Dark Mode</button>
      <button onClick={() => setDarkMode(false)}>Light Mode</button>
      </div>
      {/* Text Toggle */}
      <h1 onClick={handleTextClick}>{textMode}</h1>
    </div>
  );
}

export default App;
