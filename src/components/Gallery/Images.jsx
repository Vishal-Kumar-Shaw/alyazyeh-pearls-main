import React from "react";
import './Images.css';
import img from './pic.jpg'

function Gallery() {
  const images = [
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
    "https://img.freepik.com/free-photo/big-beautiful-jewel_144627-28856.jpg?w=740&t=st=1677527384~exp=1677527984~hmac=31c27f5eb5c7fa01d7a2535edcb01b54d9db4f5144268e27583a0b04b4a46c3d",
   
  ];

  return (
    <>
    <h1>Our Masterpieces</h1>
    <div className="gallery" style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
      <div className="gallery-grid" style={{display:'flex',flexDirection: 'column', alignItems: 'center'}}>
        <div className="row" style={{display:'flex',flexDirection: 'row', justifyContent: 'center'}}>
          <img src={img} className='img' alt="Diamond 1" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 2" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 3" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 4" style={{height:'200px', width:'320px'}}/>
        </div>
        <div className="row" style={{display:'flex',flexDirection: 'row', justifyContent: 'center'}}>
          <img src={img} className='img' alt="Diamond 1" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 2" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 3" style={{height:'200px', width:'320px'}}/>
          <img src={img} className='img' alt="Diamond 4" style={{height:'200px', width:'320px'}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Gallery;
