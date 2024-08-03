import React, { useEffect, useState } from 'react';
import api from '../api';

const Message = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    api.get('/Message')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Message;
