//import React from 'react'
import "./style.css";
import Card from "../card/index";
import {  remaining } from "../redux/selection.js";
//import product from "../xedap";
import { useDispatch,useSelector } from "react-redux";
import ProductSlice from "../product/productSlice.jsx";
const TrangSanPham = () => {
  const dispatch = useDispatch();
const Remaining=useSelector(remaining)
console.log(Remaining)
  const handlechange = (e) => {
    console.log(e.target.value);
    dispatch(ProductSlice.actions.changefilter(e.target.value));
    console.log(Remaining);
  };
  return (
    <div
      className="grid transanpham"
      style={{
        gridTemplateColumns: "30% 70% ",
      }}
    >
      <div className="list1">
        <ul className="p-10 fixed">
          <span>Loại xe đạp</span>
          <li>
            <input
              type="radio"
              name="xedap"
              id=""
              value={""}
              onClick={handlechange}
            />
            ALL
          </li>
          <li>
            <input
              type="radio"
              name="xedap"
              id=""
              value={"Xe Đạp Điện"}
              onClick={handlechange}
            />
            Xe Đạp Điện
          </li>
          <li>
            <input
              type="radio"
              name="xedap"
              id=""
              value={"Xe Đạp Gấp"}
              onClick={handlechange}
            />
            Xe Đạp Gấp
          </li>
          <li>
            <input
              type="radio"
              name="xedap"
              id=""
              value={"Xe Đạp Đua"}
              onClick={handlechange}
            />
            Xe Đạp Đua
          </li>
          <li>
            <input
              type="radio"
              name="xedap"
              id=""
              value={"Xe Đạp Địa Hình"}
              onClick={handlechange}
            />
            Xe Đạp Địa Hình
          </li>
          <span>Phụ kiên xe đạp</span>
          <li>
            <input type="radio" name="" id="" />
            Pin
          </li>
          <li>
            <input type="radio" name="" id="" />
            Bánh xe
          </li>
          <li>
            <input type="radio" name="" id="" />
            Khung
          </li>
        </ul>
      </div>
      <div className="list2">
        <ul className="flex flex-wrap m-auto gap-2 translate-y-14">
          {Remaining.map((el, index) => (
            <li key={index}>
              {
                <Card
                  name={el.name}
                  price={el.price}
                  size={el.size}
                  state={el.state}
                  url1={el.url1}
                />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrangSanPham;
