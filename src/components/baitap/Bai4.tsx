import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Bai4() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const studentName = params.get('studentName');

  return (
    <div>
      <b>{studentName}</b>
    </div>
  );
}
