import React, { useCallback, useState } from 'react';
import './App.css';
import LaunchList from "./Components/LaunchList"
import LaunchProfile from './Components/LaunchProfile';

function App() {
  const [id, setId] = useState(42);
  const handleChange = useCallback(newId => {setId(newId)}, [])

  return (
    <div className="App">
     <LaunchList handleIdChange={handleChange} />
     <LaunchProfile id={id} />
    </div>
    
  );
}

export default App;
