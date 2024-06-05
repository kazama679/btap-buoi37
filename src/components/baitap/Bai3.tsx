import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Bai3() {
  const navigate = useNavigate();
  const [a, setA] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(e.target.value);
  }

  const handleClick = () => {
    navigate(`/result?studentName=${a}`);
  }

  return (
    <div>
      <input onChange={handle} type="text" placeholder='Nhập từ khóa tìm kiếm' />
      <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  );
}
