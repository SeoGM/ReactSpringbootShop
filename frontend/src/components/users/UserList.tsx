import React, { useEffect, useState } from 'react';
import { userApi } from '../../api';
import { AxiosResponse } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userApi.get('')
      .then((response: AxiosResponse<User[]>) => {
        setUsers(response.data);
      })
      .catch((error: Error) => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.length > 0 ? users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        )) : 'no data'}
      </ul>
    </div>
  );
};

export default UserList;
