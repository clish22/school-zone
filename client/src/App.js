import { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/v1');
      setComments(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!comments ? 'Loading...' : comments.message}</p>
      </header>
    </div>
  );
}

export default App;
