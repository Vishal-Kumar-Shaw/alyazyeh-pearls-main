import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Cards.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';
export default function Cards() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
   return (
    <div className='card' ><MDBCardGroup>
      <MDBCard data-aos="zoom-in">
        <div className='img'><MDBCardImage style={{height:"100%", width:"100%"}} src='/Images/d2.jpg' alt='...' position='top' /></div>
        <MDBCardBody>
          <MDBCardTitle>DESIGN</MDBCardTitle>
          <MDBCardText>
          We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe.
          </MDBCardText>
     <MDBBtn className='btn'>Explore</MDBBtn>
        </MDBCardBody>
       </MDBCard>

      <MDBCard data-aos="fade-up">
      <div className='img'><MDBCardImage  style={{height:"100%", width:"100%"}} src='/Images/d3.jpg' alt='...' position='top' /></div>
        <MDBCardBody>
          <MDBCardTitle>CUTTING</MDBCardTitle>
          <MDBCardText>
          Our upstream operations comprise of detailed planning and strategy whereby we determine the rich source of pedigreed diamonds. Be it land, or sea; our exploration and mining operations, ensure cost-efficiency and result in the extraction of high-value diamonds.
          </MDBCardText>
         <MDBBtn className='btn'>Explore</MDBBtn>
        </MDBCardBody>
     </MDBCard>

      <MDBCard data-aos="zoom-in">
      <div className='img'> <MDBCardImage style={{height:"100%", width:"100%"}} src='/Images/d4.jpg' alt='...' position='top' /></div>
        <MDBCardBody>
          <MDBCardTitle>TRADING</MDBCardTitle>
          <MDBCardText>
          Our success lies in offering the finest and responsibly sourced diamonds at competitive prices along with value-added services. The diamonds we source, entail Kimberley Process Certification and have been sourced as per the conflict-free standards and compliance policies.
          </MDBCardText>
        <MDBBtn className='btn'>Explore</MDBBtn>
        </MDBCardBody>
        </MDBCard>
    </MDBCardGroup></div>
  );
}