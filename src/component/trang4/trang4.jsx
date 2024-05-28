
import {useState,useEffect} from 'react'
import './style.css'
const Trang4=()=> {
  const [hoverStates, setHoverStates] = useState(new Array(4).fill('none'));
    useEffect(()=>{
      const array1=document.querySelectorAll('para');
      array1.forEach((el,index)=>{
        array1[index].style.display=hoverStates[index];
      })
      console.log('hello')
    },hoverStates)
    const para=['Xe đạp địa hình','Xe đạp đua','Xe đạp điện','Xe đạp gấp']
    const items = [
      'https://images.wallpaperscraft.com/image/single/mountain_bicycle_wood_traces_8797_1280x720.jpg',
      'https://yeuchaybo.com/wp-content/uploads/2018/10/xe-dap-bogdan-cadar-666656-unsplash.jpg',
      'https://images.wallpaperscraft.com/image/single/sport_audi_grey_background_94380_1280x720.jpg',
      'https://images.pexels.com/photos/15608762/pexels-photo-15608762/free-photo-of-d-ng-di-b-xe-la-xe-d-p.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
    return (
      <div className='slider' style={{width:'100%'}}>
        <div className='txt'>Các loại xe đạp shop có</div>
        <div className='list'>
          {items.map((item, index) => (
            <div className='item' key={index} onMouseEnter={()=>{
              const value=new Array(4).fill('none');
              value[index]='flex';
              setHoverStates(value);
            }} onMouseLeave={()=>{
              const value=new Array(4).fill('none');
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


export default Trang4
