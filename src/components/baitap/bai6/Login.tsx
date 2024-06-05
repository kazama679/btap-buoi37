import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
  role: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<User>({
    email: '',
    password: '',
    role: '',
  });

  const [userState] = useState<User>({
    email: 'test@example.com',
    password: 'password123',
    role: 'admin',
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formState.email === userState.email &&
      formState.password === userState.password &&
      formState.role === userState.role
    ) {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('userRole', userState.role);
      navigate('/account');
    } else {
      setError('Đăng nhập không thành công, vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quyền:</label>
          <input
            type="text"
            name="role"
            value={formState.role}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
