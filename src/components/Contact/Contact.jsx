import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardImage,
  MDBCol,

   } from 'mdb-react-ui-kit';
import './Contactus.css';
export default function Contact() {
  return (
    <>
    <MDBCard>
      <MDBCardBody>
        <center>
      <MDBCardImage className='logo' style={{height:"5%", width:"5%"}} src='./Images/logo.png' position='top' alt='...' />
      </center>
      <MDBCardTitle className='ct'> GET IN TOUCH WITH US</MDBCardTitle>
        <MDBCardText>
        For inquiries, or assistance, our representatives are available around-the-clock for you.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <MDBRow>
      <MDBCol sm='4'>
        <MDBCard className='c3'>
          <MDBCardBody>
            <MDBCardTitle className='ct'>HEAD OFFICE</MDBCardTitle>
            <MDBCardText>
            Al Saqr Business Tower,DIFC/Sheikh Zayed Road,Dubai, 
United Arab Emirates
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='4'>
        <MDBCard className='c3'>
          <MDBCardBody>
            <MDBCardTitle className='ct'> EMAIL ID</MDBCardTitle>
            <MDBCardText>
            AlyazyehPearls@global.com
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='1'>
        <MDBCard className='c3'>
          <MDBCardBody>
            <MDBCardTitle className='ct'>   TELEPHONE</MDBCardTitle>
            <MDBCardText>
            +971 4 358 9000
            </MDBCardText>
            </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <center>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </center>
    </>
  );
}

