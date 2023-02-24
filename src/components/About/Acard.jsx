import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';

export default function App() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
  return (
    <div className='image'>
    <MDBRow>
      <MDBCol  data-aos="zoom-in" lg='4' md='12' className='mb-4'>
        <img src='./Images/d9.jpg' className='img' alt='' />
      </MDBCol>
      

      
        <MDBCol data-aos="zoom-out" md='5' className='mb-4'>
        <img
          src='./Images/d5.jpg'alt=''/>
      </MDBCol>
      
     
      <MDBCol data-aos="zoom-in" lg='4' md='2' className='mb-4'>
        <img
          src='./Images/d8.jpg' alt='' />
      </MDBCol>
      
     <MDBCol data-aos="zoom-out "lg='4' md='6' className='mb-4'>
        <img
          src='./Images/d10.jpg' alt='' />
      </MDBCol>
    </MDBRow>
        
    </div>
  );
}