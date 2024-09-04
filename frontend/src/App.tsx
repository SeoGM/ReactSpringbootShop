import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');

  const backendUrl =
    process.env.REACT_APP_BACKEND_URL ||
    'https://8080-seogm-reactspringboots-n6p9ze8t2z8.ws-us116.gitpod.io/';

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>React + Spring Boot Example</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
