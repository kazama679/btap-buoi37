import React from 'react'
import './products.css'
import { useNavigate, useParams } from 'react-router-dom';
export default function Products() {
  let products=[
    {
      id:1,
      name:'mèn mén 1',
      price: 5000,
      image: 'https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_2676/men-men-dac-san-voi-ten-goi-doc-la-co-huong-vi-kho-quen-cua-nguoi-mong-202305030928531319.jpg'
    },
    {
      id:2,
      name:'mèn mén 2',
      price: 6000,
      image: 'https://static-images.vnncdn.net/files/publish/2023/3/20/men-men-ha-giang-1-1441.jpg'
    },
    {
      id:3,
      name:'mèn mén 3',
      price: 7000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3ow0Btz22zLMeBoCKOwrZF6Ce7MebEY52w&s'
    }
  ]
  const navigate = useNavigate();
  const handleClickDetail=(id:number)=>{
    navigate(`/productDetail/${id}`);
  }
  return (
    <div className='container'>
      Products
      {products.map((i)=>{
        return (
          <div>
            <p>tên: {i.name}</p>
            <p><img src={i.image} alt="" /></p>
            <p>giá: {i.price}</p>
            <button>mua</button>
            <button onClick={() => handleClickDetail(i.id)}>chi tiết sản phẩm</button>
          </div>
        )
      })}
    </div>
  )
}
