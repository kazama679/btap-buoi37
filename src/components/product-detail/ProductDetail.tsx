import React from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    let products=[
        {
          id:1,
          name:'mèn mén 1',
          price: 5000,
          image: 'https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_2676/men-men-dac-san-voi-ten-goi-doc-la-co-huong-vi-kho-quen-cua-nguoi-mong-202305030928531319.jpg',
          description: 'mén mèn đến từ Lào Cai'
        },
        {
          id:2,
          name:'mèn mén 2',
          price: 6000,
          image: 'https://static-images.vnncdn.net/files/publish/2023/3/20/men-men-ha-giang-1-1441.jpg',
          description: 'mén mèn đến từ Hà Giang'
        },
        {
          id:3,
          name:'mèn mén 3',
          price: 7000,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3ow0Btz22zLMeBoCKOwrZF6Ce7MebEY52w&s',
          description: 'thơm ngon mời bạn ăn nha'
        }
    ];
      const params= useParams();
      console.log(11111111111,params);
      //lấy ra id
      const id = Number(params.productId);
      let productDetail = products.find((item)=>{
        return item.id===id;
      })
  return (
    <div>
      ProductDetail
        <p>name: {productDetail?.name}</p>
        <p>price: {productDetail?.price}</p>
        <img src={productDetail?.image} alt="" />
        <p>mô tả: {productDetail?.description}</p>
    </div>
  )
}
