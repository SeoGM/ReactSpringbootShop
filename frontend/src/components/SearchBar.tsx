import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 추가 (예: API 호출)
    console.log('Searching for:', searchTerm);
    // 검색어 초기화
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSearch} style={formStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Search</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  padding: '5px 10px',
  borderRadius: '4px 0 0 4px',
  border: '1px solid #ccc',
  flex: 1,
};

const buttonStyle = {
  padding: '5px 10px',
  borderRadius: '0 4px 4px 0',
  border: '1px solid #ccc',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default SearchBar;
