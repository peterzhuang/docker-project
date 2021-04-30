import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState('');
  const [mongoHealth, setMongoHealth] = useState('fail');

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || 'jardinpastel.com';
    const API_PORT = process.env.REACT_APP_API_PORT || '3001';
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    console.log('Request on address ', API_BASE_ADDRESS);
    const fetchData = async () => {
      const result = await axios(`${API_BASE_ADDRESS}/test`);
      setResponse(result.data);
    };

    fetchData();

    return () => {};
  }, []);

  useEffect(() => {
    const checkHealth = async () => {
      const API_URL = process.env.REACT_APP_API_URL || 'jardinpastel.com';
      const API_PORT = process.env.REACT_APP_API_PORT || '3001';
      const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
      try {
      const result = await axios(`${API_BASE_ADDRESS}/healthcheck`);
      console.log(`result: ${JSON.stringify(result)}`);
      setMongoHealth(result.data.status);
      } catch (err) {
        setMongoHealth('fail');
      }
    };
    const checkStatusTimer = setInterval( () => checkHealth(), 5000);
    
    return () => {
      clearInterval(checkStatusTimer);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hot Reload is still working!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The response is: {response}
        </a>
      </header>
      <h4>MongoDb connection was: {mongoHealth}</h4>
    </div>
  );
}

export default App;
