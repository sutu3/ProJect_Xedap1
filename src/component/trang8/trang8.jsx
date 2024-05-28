//import React from 'react'
import './style.css'
const trang8 = () => {
  return (
    <div className='trang8'>
     <h1>The Shopping bikecicle </h1> 
     <p>Where To</p>
     <ul>
      <li>OutSide</li>
      <li>Interior</li>
      <li>Location</li>
      <li>Video</li>
      <li>Team</li>
     </ul>
     <div className='info'>
      <div className='it'>
        <div>Quoách Chí Ân</div>
        <div>Trần Minh Đại</div>
      </div>
      <div className='it' onClick={()=>{
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      }}>Back to top</div>
      <div className='it'>Đồ Án Môn Thực Hành Wed và ứng dụng</div>
     </div>
    </div>
  )
}

export default trang8
