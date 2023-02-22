import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Enquire.css"

export default function Enquire(){
    return (
      <MDBCard background='dark' className='text-white'>
       <div className='img'> <MDBCardImage style={{height:"100%", width:"100%"}} overlay src='./Images/d5.jpg' alt='...'/></div>
        <MDBCardOverlay>
          <div className='info'><MDBCardTitle><br></br>AVAIL EXPERT GEMMOLOGICAL SERVICES FROM THE MULTINATIONAL TEAM</MDBCardTitle>
          <MDBCardText>
          <br></br>AlyazyehPearls takes pride in having a multinational and experienced team of gemologists, graders, analysts, polishers, and craftsmen that are instilled with a passion to perform, and continue to pursue excellence every day.
          </MDBCardText>
          </div>
          <div className='btn'><MDBBtn>Explore</MDBBtn></div>
          </MDBCardOverlay>
      </MDBCard>
    );
  }
  