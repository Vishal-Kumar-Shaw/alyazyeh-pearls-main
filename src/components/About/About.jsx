import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
  MDBCol
} from 'mdb-react-ui-kit';
import './About.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';


export default function A1() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
       return (
    <><div>
        <MDBCardText>
        Classic white diamonds, epitomize eternal love and magnificent brilliance that is simply remarkable, therefore, the demand for it is ever-augmenting amongst the consumers. Our diverse network all around the world is committed towards offering quality products and facilitating our trusted jewelry makers & manufacturers, traders, investors, and individual clients.
        </MDBCardText>
          <MDBCard className='a11' data-aos="zoom-in" style={{ maxWidth: '1450px' }} >
              <MDBRow className='g-0'>

                  <MDBCol md='4'>
                      <div><MDBCardImage style={{ height: "100%", width: "100%" }} src='./Images/d7.jpg' alt='...' fluid /></div>
                  </MDBCol>
                  <MDBCol md='8' className='a2'>
                      <div>
                          <MDBCardBody className='a3'>
                          <br></br>
                              <MDBCardTitle className='T1'>POLISHED & CERTIFIED</MDBCardTitle>
                              <br></br>
                              <MDBCardText>
                                  Classic white diamonds, epitomize eternal love and magnificent brilliance that is simply remarkable, therefore, the demand for it is ever-augmenting amongst the consumers. Our diverse network all around the world is committed towards offering quality products and facilitating our trusted jewelry makers & manufacturers, traders, investors, and individual clients.
                              </MDBCardText>
                          </MDBCardBody>
                      </div>
                  </MDBCol>

              </MDBRow>
          </MDBCard>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>

      <div>
        <MDBCard className='a12' data-aos="zoom-out"style={{ maxWidth: '1500px' }}>
                  <MDBRow className='g-0'>
                    <MDBCol md='8' className='a2'>
                              <MDBCardBody className='a2'>
                              <br></br>
                                  <MDBCardTitle className='T1'>FANCY COLOR DIAMONDS</MDBCardTitle>
                                  <MDBCardText>
                                  <br></br>
                                  Fancy color diamonds are undoubtedly rare and unique. Our fancy diamond collection encompasses the rarest of color combinations that makes them special. If you prefer making a unique style statement then fancy diamonds are an ideal choice with a wide range of colors, combinations and hues to choose from. Moreover, we specialize in the fashionable cuts of fancy diamonds.
                                  </MDBCardText>
                              </MDBCardBody>
                     </MDBCol>
                      <MDBCol md='4'>
                          <div className='i2'><MDBCardImage style={{ height: "100%", width: "100%" }} src='./Images/d8.jpg' alt='...' fluid /></div>
                      </MDBCol>
                      </MDBRow>
              </MDBCard>
          </div></>
  );
}

