import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Teams: React.FC = () => {
  return (
    <div>
      <h2>Teams</h2>
      <nav>
        <Link to="/teams">Teams Index</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Teams;
