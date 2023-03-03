import React from 'react';
import { MdOutlineBusiness,MdOutlineForum,MdOutlineCall} from "react-icons/md";

import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardImage,
  MDBCol,

   } from 'mdb-react-ui-kit';
  //  import AOS from 'aos';

   import {useEffect} from 'react';
   import './Contactus.css';
   export default function Contact() {
    //  useEffect(() => {
    //    AOS.init({
    //      duration : 2000
    //    });
    //  }, []);
     return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <MDBCard className='contact-first-line'>
      <MDBCardBody>
        <center>
      <MDBCardImage className='logo' style={{height:"5%", width:"5%"}} src='./Images/logo.png' position='top' alt='...' />
      </center>
      <MDBCardTitle className='ct'> GET IN TOUCH WITH US</MDBCardTitle>
        <MDBCardText>
        For inquiries, or assistance, our representatives are available around-the-clock for you.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard> */}

    <h2 className='contact-second-heading' >GET IN TOUCH WITH US !</h2>
    <p className='contact-paragraph'>For any inquiries, our representatives are available around-the-clock for you.</p>
  
    
    <br></br>
    <br></br>
    <br/>
    <div className='contact-main-div'>
      <div className='contact-firstDiv'>
          <h2 className="contact-div-h2 "> <MdOutlineBusiness className='icon-display-contact'/> HEAD OFFICE</h2>
          <p className='div-first-para'>ALYAZYEH FOR PEARLS & PRECIOUS STONES TRADING CO. L.L.C, Office G/05, Owned by FAHAD AHMAD ABDULKARIM ALZAROUNI, Hor Al Anz</p>

      </div>
      <div className='contact-secondDiv'>
          <h2 className="contact-div-h2"><MdOutlineForum className='icon-display-contact'/>  EMAIL ID</h2>
          <p className='div-second-para'>info@AlyazyehPearls.com</p>

      </div>
      <div className='contact-secondDiv'>
          <h2 className="contact-div-h2"><MdOutlineCall className='icon-display-contact'/>TELEPHONE</h2>
          <p className='div-second-para'> +971544444210</p>

      </div>
    </div>

        
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <center>
      <div className="form">
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '550px' }}>
      <h2>Contact us</h2><br></br>

      Name : <MDBInput  v-model='name' wrapperClass='mb-4' />

      Email address :<MDBInput type='email' v-model='email' wrapperClass='mb-4' />

      Subject :<MDBInput v-model='subject' wrapperClass='mb-4' />

      Message :<MDBTextArea wrapperClass='mb-4'  />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
      </div>
    </center>
    <div className='map'><center><h2>Find us</h2></center>
    <br></br>
    <br></br>
     <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d15504.469414713038!2d55.313641822915166!3d25.278738!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db97a570103%3A0x464d9c7691c8173c!2sAlZarouni!5e1!3m2!1sen!2sin!4v1677662951254!5m2!1sen!2sin"  width="1800" height="600"></iframe></div>
    </>
  );
}