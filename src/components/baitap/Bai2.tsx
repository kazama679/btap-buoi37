import React from 'react'
import { useParams } from 'react-router-dom';

export default function Bai2() {
    const params= useParams();
  return (
    <div>
        name: {params.name}
    </div>
  )
}
