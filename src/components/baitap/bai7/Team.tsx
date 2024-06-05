import React from 'react';
import { useParams } from 'react-router-dom';

const Team: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <div>
      <p>{teamId}</p>
    </div>
  );
};

export default Team;
