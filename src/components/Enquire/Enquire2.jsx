import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function card() {
  return (
    <>
    <center>
      <MDBCard className='w-75'>
        <MDBCardBody>
          <MDBCardTitle>EXCELLENCE IN THE DIAMOND VALUE CHAIN</MDBCardTitle>
          <MDBCardText>Our experience leads us to produce exceptional quality products. Being one of the leading manufacturers in the GCC region, we have our in-house, high-tech manufacturing laboratory and factory where rough diamonds are polished every day on a large-scale. This results in a high annual turnover, catering to the demand for the sought-after diamonds in the industry.</MDBCardText>
          <MDBBtn href='#'>Explore</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </center>
      <div>
        {/* 👇️ colored horizontal line */}
        <hr
          style={{
            background: 'golden',
            color: 'white',
            borderColor: 'white',
            height: '50px',
          }}
        />
        </div>

      <br />
      <center>
      <MDBCard className='w-50' data-aos="zoom-out" style={{ maxWidth: '1800px' }}>
      <center><div className='img' style={{height:"20vw", width:"20vw"}}><MDBCardImage style={{height:"100%", width:"100%"}} overlay src='./Images/d9.jpg' alt='...'/></div></center>
      
      <MDBCardBody>
          <MDBCardTitle className='T'>DIAMOND JEWELRY</MDBCardTitle>
          <MDBCardText className='in'>WE CREATE THE POWERFUL COMBINATION OF EXPERTS & TECHNOLOGY TO ACHIEVE EXCELLENCE</MDBCardText>
         
          <MDBBtn href='#'>Explore</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </center>
    </>
  );
}
