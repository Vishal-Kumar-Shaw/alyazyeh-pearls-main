import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';

export default function Enquire(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <MDBCard data-aos="fade-up" background='dark' className='text-white'>
       <div className='img' style={{height:"25vw", width:"100vw"}}><MDBCardImage style={{height:"100%", width:"100%"}} overlay src='./Images/d6.jpg' alt='...'/></div>
        <MDBCardOverlay>
          <div className='info'><MDBCardTitle><br></br>AVAIL EXPERT GEMMOLOGICAL SERVICES FROM THE MULTINATIONAL TEAM</MDBCardTitle>
          <MDBCardText data-aos="fade-up">
          <br></br>AlyazyehPearls takes pride in having a multinational and experienced team of gemologists, graders, analysts, polishers, and craftsmen that are instilled with a passion to perform, and continue to pursue excellence every day.
          </MDBCardText>
          </div>
          <div className='btn'><MDBBtn>Explore</MDBBtn></div>
          </MDBCardOverlay>
      </MDBCard>
    );
  }
  