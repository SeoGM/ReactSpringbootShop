import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../../utils/api';
import { User } from '../../../types/userTypes';

const fetchUsers = (): Promise<User[]> => fetchData('/users');

const Dashboard = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>관리자 대시보드에 오신 것을 환영합니다.</p>

      {/* 사용자 목록을 표시 */}
      <h2>사용자 목록</h2>
      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>에러: {(error as Error).message}</p>
      ) : users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>사용 가능한 사용자가 없습니다.</p>
      )}
    </div>
  );
};

export default Dashboard;
