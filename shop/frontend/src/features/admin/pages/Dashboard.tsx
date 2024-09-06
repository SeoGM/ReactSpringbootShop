import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../utils/api';
import axios from 'axios';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  contact: string;
  address?: string;
  emailVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // 사용자 목록을 불러오는 비동기 함수
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://8080-seogm-reactspringboots-wty131htfel.ws-us116.gitpod.io/api/users',
      );
      setUsers(response.data); // API 응답 데이터를 상태에 저장
      setLoading(false); // 로딩 종료
    } catch (err) {
      setError('사용자 목록을 불러오는 중 에러가 발생했습니다.'); // 에러 메시지 설정
      setLoading(false); // 로딩 종료
    }
  };

  // 컴포넌트가 처음 렌더링될 때 fetchUsers 함수 호출
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>

      {/* 사용자 목록을 표시 */}
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default Dashboard;
