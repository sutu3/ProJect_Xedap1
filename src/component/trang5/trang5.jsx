import {useState,useEffect} from 'react'
import './style.css'
const Trang5 = () => {
 const [hoverStates, setHoverStates] = useState(new Array(3).fill('none'));
    useEffect(()=>{
      const array1=document.querySelectorAll('para');
      array1.forEach((el,index)=>{
        array1[index].style.display=hoverStates[index];
      })
    },hoverStates)
    const para=['Bánh Xe','Pin','Khung Xe',]
    const items = [
      'https://images.wallpaperscraft.com/image/single/bicycle_wheel_disc_157015_1280x720.jpg',
      'https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/9/18/eleglidem1electricbikebatter-169503860033292587394.jpg',
      'https://img.websosanh.vn/v2/users/review/images/cach-phan-biet-khung-xe-dap/1yonji4etigsz.jpg',
    ];
    return (
      <div className='slider1'>
        <div className='txt'>Các loại phụ kiện</div>
        <div className='list'>
          {items.map((item, index) => (
            <div className='item1' key={index} onMouseEnter={()=>{
              const value=new Array(4).fill('none');
              value[index]='flex';
              setHoverStates(value);
            }} onMouseLeave={()=>{
              const value=new Array(3).fill('none');
              value[index]='none';
              if(value !== hoverStates)
              {
                setHoverStates(value);
              }
            }}>
              <img src={item} alt={`Item ${index}`}/>
              <div className='para' style={{display:hoverStates[index]}} >{para[index]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default Trang5
