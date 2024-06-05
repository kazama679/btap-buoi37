import React from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Products from './components/products/Products'
import ProductDetail from './components/product-detail/ProductDetail'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import PrivateRouter from './components/baitap/bai5/PrivateRouter'
import Account from './components/baitap/bai5/Account'
import ProtectedRoute from './components/baitap/bai6/ProtectedRoute'
import AdminRoute from './components/baitap/bai6/AdminRoute'
import Teams from './components/baitap/bai7/Teams'
import TeamsIndex from './components/baitap/bai7/TeamsIndex'
import Team from './components/baitap/bai7/Team'
import LazyLoadComp from './components/baitap/bai9/LazyLoadComp'
import About from './components/baitap/baii10/About'
import Contact from './components/baitap/baii10/Contact'
import Post from './components/baitap/baii10/Post'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home></Home>}> 
          <Route path='/home/header' element={<Header></Header>}></Route>
        </Route>

        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/productDetail/:productId' element={<ProductDetail></ProductDetail>}></Route>

        {/* bài tập */}
        <Route path='/bai1/:id' element={<Bai1></Bai1>}></Route>
        <Route path='/bai2/:name' element={<Bai2></Bai2>}></Route>
        <Route path='/bai3' element={<Bai3></Bai3>}></Route>
        <Route path="/result" element={<Bai4></Bai4>} />
        <Route path="/bai5" element={<PrivateRouter/>} />
        {/* bài 6 */}
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route element={<AdminRoute />}></Route>
        {/* bài 7 */}
        <Route path="/teams" element={<Teams />}>
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<Team />} />
        </Route>
        <Route path="/bai9" element={<LazyLoadComp></LazyLoadComp>} />
        {/* bài 10 */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
        {/* end-bài tập */}
      </Routes>
    </div>
  )
}
