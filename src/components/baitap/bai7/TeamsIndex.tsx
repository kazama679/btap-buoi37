import React from 'react';
import { Link } from 'react-router-dom';

const TeamsIndex: React.FC = () => {
  const teamList = [
    { id: 1, name: 'Team A' },
    { id: 2, name: 'Team B' },
    { id: 3, name: 'Team C' },
  ];

  return (
    <div>
      <h3>Teams Index</h3>
      <ul>
        {teamList.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamsIndex;
