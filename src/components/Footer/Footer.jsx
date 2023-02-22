import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



export default function App() {
  return (
  <MDBFooter bgColor='Dark' color='light'className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div><a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.co.in/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          </div> 
      </section>

      <section className='name'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'><div className='img'>  
          <img style={{height:"100%", width:"100%"}} src='/Images/logo.png' alt='...' position='top' /></div>
          </MDBCol> 
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <div>
               
              </div>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <div className='img'><image src='./'></image></div>
                Alyazyeh Pearls
              </h6>
              <p>
              Alyazyeh Pearls is a company dedicated to the exercise of Prospecting, Recognition, Exploration, Lapidation and Marketing 
of diamonds.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='types.jsx' className='text-reset'>
                Diamond types
                </a>
              </p>
              <p>
                <a href='Jewellery.jsx' className='text-reset'>
                Jewellery
                </a>
              </p>
              <p>
                <a href='Gallery.jsx' className='text-reset'>
                Gallery
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                Cutting & Polishing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Designing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Manufacturing
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                   31-Floor, Al Saqr Business Tower DIFC - 91 Sheikh Zayed Rd-Dubai UAE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />Phone: +971 4 358 9000
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> Email:AlyazyehPearls@global.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Alyazyeh Pearls | All righs reserved.
        
      </div>
    </MDBFooter>
  );
}


// export default function end() {
  // return (
    // <div className='bg-image hover-zoom'>
      // <img src='./Images/d6.jpg' className='w-100' />
    // </div>
  // );
// }


