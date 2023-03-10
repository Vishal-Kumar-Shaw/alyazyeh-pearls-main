import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
// import './Enquire.css';
export default function Enquire(){
  return (
      <MDBCard data-aos="zoom-in" background='dark' className='text-white'>
       <div className='img' style={{height:"30vw", width:"100vw"}}><MDBCardImage style={{height:"100%", width:"100%"}} overlay src='https://img.freepik.com/premium-photo/real-diamond_154026-1599.jpg?w=996' alt='...'/></div>
        <MDBCardOverlay>
          <div className='info'><MDBCardTitle className='T'><br></br>DIAMOND MANUFACTURING</MDBCardTitle>
          <MDBCardText className='info1' data-aos="zoom-out">
          <br></br>AlyazyehPearls Our experience leads us to produce exceptional quality products.<br></br> Being one of the leading manufacturers in the GCC region.
          </MDBCardText>
          </div>
          {/* <div className='btn'><MDBBtn>Explore</MDBBtn></div> */}
          </MDBCardOverlay>
      </MDBCard>
     
    );
  }
  