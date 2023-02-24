import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardHeader,
  MDBBtn,
   MDBCol
} from 'mdb-react-ui-kit';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';

export default function Ainfo() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
  return (
    <>
    <div className="main">
    <MDBCard alignment='center' className="A1">
      <MDBCardHeader>WELCOME</MDBCardHeader>
      <MDBCardBody>
        <MDBCardText>
        Classic white diamonds, epitomize eternal love and magnificent brilliance that is simply remarkable, therefore, the demand for it is ever-augmenting amongst the consumers. <br></br>
        Our diverse network all around the world is committed towards offering quality products and facilitating our trusted jewelry makers & manufacturers, traders, investors, and individual clients.
        </MDBCardText>
        <MDBBtn href='#'>Explore</MDBBtn>
      </MDBCardBody>
      </MDBCard>
      </div>
    <div>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol data-aos="zoom-in">
        <MDBCard style={{ height:'25vw', width: '28vw' }}>
          <MDBCardImage
            src='./Images/d17.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>PROFESSIONALISM</MDBCardTitle>
            <MDBCardText>
            Demonstrate Professionalism in Our Operations
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="flip-in">
        <MDBCard style={{ height:'28vw', width: '25vw' }}>
          <MDBCardImage
            src='./Images/A2.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>TRUST</MDBCardTitle>
            <MDBCardText>
            Develop and Nurture Trust, Internally & Externally
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="zoom-in">
        <MDBCard style={{ height:'28vw', width: '28vw' }}>
          <MDBCardImage
            src='./Images/d14.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SUSTAINABILITY</MDBCardTitle>
            <MDBCardText>
            Keep Sustainability at The Core of Our Activities
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="zoom-out">
        <MDBCard style={{ height:'28vw', width: '28vw' }}>
          <MDBCardImage
            src='./Images/d15.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>PASSION</MDBCardTitle>
            <MDBCardText>
            Exceed Expectations, Deliver Results
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="zoom-in">
        <MDBCard style={{ height:'28vw', width: '28vw' }}> 
          <MDBCardImage
            src='./Images/d16.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>QUALITY</MDBCardTitle>
            <MDBCardText>
            Delivering Quality Products, Increasing Brand Loyalty
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol data-aos="zoom-out">
        <MDBCard style={{ height:'28vw', width: '28vw' }}>
          <MDBCardImage
            src='./Images/d13.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>TEAMWORK</MDBCardTitle>
            <MDBCardText>
            Work in Unison, Make History
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow></div>
    </>
  );
}