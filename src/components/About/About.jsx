import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function A1() {
  return (
    <><div className='c1'>
          <MDBCard style={{ maxWidth: '1500px' }} >
              <MDBRow className='g-0'>

                  <MDBCol md='4'>
                      <div className='a1'><MDBCardImage style={{ height: "100%", width: "100%" }} src='./Images/d7.jpg' alt='...' fluid /></div>
                  </MDBCol>
                  <MDBCol md='8'>
                      <div className='a2'>
                          <MDBCardBody>
                              <MDBCardTitle>POLISHED & CERTIFIED</MDBCardTitle>
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

      <div className='c1'>
              <MDBCard style={{ maxWidth: '1500px' }}>
                  <MDBRow className='g-0'>

                      <MDBCol md='4'>
                          <div className='a1'><MDBCardImage style={{ height: "100%", width: "100%" }} src='./Images/d8.jpg' alt='...' fluid /></div>
                      </MDBCol>
                      <MDBCol md='8'>
                          <div className='a2'>
                              <MDBCardBody>
                                  <MDBCardTitle>FANCY COLOR DIAMONDS</MDBCardTitle>
                                  <MDBCardText>
                                  Fancy color diamonds are undoubtedly rare and unique. Our fancy diamond collection encompasses the rarest of color combinations that makes them special. If you prefer making a unique style statement then fancy diamonds are an ideal choice with a wide range of colors, combinations and hues to choose from. Moreover, we specialize in the fashionable cuts of fancy diamonds.
                                  </MDBCardText>
                              </MDBCardBody>
                          </div>
                      </MDBCol>

                  </MDBRow>
              </MDBCard>
          </div></>
  );
}

