import React, { useState, useEffect } from 'react';

function TestPage() {
  const [message, setMessage] = useState<string>('');

  const backendUrl =
    process.env.REACT_APP_BACKEND_URL ||
    'https://8080-seogm-reactspringboots-8grpgdnxcdr.ws-us116.gitpod.io';

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="TestPage">
      <h1>Test Page: React + Spring Boot Example</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default TestPage;
