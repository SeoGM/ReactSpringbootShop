import React from 'react';
import UserList from './components/users/UserList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Spring Boot App</h1>
      </header>
	  <UserList />
    </div>
  );
};

export default App;
