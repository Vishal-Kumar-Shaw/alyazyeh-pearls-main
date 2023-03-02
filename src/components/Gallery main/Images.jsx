import React from "react";
import './Images.css';
import img from './pic.jpg'

function Gallery() {
  

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
