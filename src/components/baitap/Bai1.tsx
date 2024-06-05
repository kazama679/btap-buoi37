import React from 'react'
import { useParams } from 'react-router-dom';

export default function Bai1() {
    const params= useParams();
    console.log(params);
  return (
    <div>
        id: {params.id}
    </div>
  )
}
