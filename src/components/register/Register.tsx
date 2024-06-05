import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const register =(e:React.FormEvent)=>{
    // ktr mọi thông tin người dùng nhập ok hết chưa
    // chuyển sang trang login
    // ngăn chặn việc submit của form -không reload lại
    e.preventDefault();
    // dùng hook navigate
    navigate('./login');
  }
  return (
    <div>
      Register
      <form onSubmit={register} action="">
        <label htmlFor="">email</label>
        <input type="text" /><br />
        <label htmlFor="">name</label>
        <input type="text" /><br />
        <label htmlFor="">password</label>
        <input type="text" /><br />
        <label htmlFor="">confirmpassword</label>
        <input type="text" /><br />
        <button>register</button>
      </form>
    </div>
  )
}
