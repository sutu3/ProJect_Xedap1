
import './App.css'
import { Route, Routes } from "react-router-dom";
import Nav from "./component/nav/nav";
import Logon from "./component/Logon/Logon";
import Trang8 from "./component/trang8/trang8";
import Trangchu from "./component/trangchu/trangchu";
import TrangSanPham from './component/trangsanpham/index'
import { useEffect } from 'react';
import Xedap from './component/xedap.js'
import {useDispatch} from 'react-redux'
import ProductSlice from './component/product/productSlice.jsx'
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
      Xedap.map((el)=>{
            dispatch(ProductSlice.actions.addProduct(el))
      })
  },)
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path='/product' element={<TrangSanPham/>}></Route>
        <Route path="/Login" element={<Logon />} />
      </Routes>
      <Trang8 />
    </div>
  )
}

export default App
