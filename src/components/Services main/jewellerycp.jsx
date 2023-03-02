import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBContainer,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit';
// import './Jewellerycp.css';
export default function Jewellery() {
  return (
    

<><div><MDBCardImage data-aos="zoom-in"className="JI1"
            src='./Images/J5.jpg'
            alt='...'
            position="start"  
            /></div>
            <br></br>
            
            <div><center>
    <MDBCard className='J0'>
    
      <MDBCardBody className='J1'>
        <MDBCardTitle className='J2'>LUXURY JEWELRY</MDBCardTitle>
        <MDBCardText className='J3'>
        Diamond jewelry has been the symbolic expression of love and ever-lasting commitment because of its endurance and sparkling brilliance. 
        Our designers and skilled jewelry makers at Goldiama Diamond put their heart and soul to create exceptional and remarkable timepieces that become the perfect expression of your bond.
        </MDBCardText>
        <MDBBtn>Explore</MDBBtn>
      </MDBCardBody>
      
    </MDBCard></center></div>

<br></br>
    <MDBCardImage data-aos="zoom-in" className="JI2"
            src='./Images/J7.jpg'
            alt='...'
           
        />
          
          
    <br>
    </br>
    <br>
    </br>

 
    <div>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard data-aos="zoom-in" className='h-100'>
          <MDBCardImage
            src='./Images/J5.jpg'
            alt='...'
            position='top'
            class='img-fluid'
          />
          <MDBCardBody>
            <MDBCardTitle className='T'>WHITE DIAMOND JEWELRY</MDBCardTitle>
            <MDBCardText className='in'>
           AlyazyehPearls Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry. Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard data-aos="zoom-out"className='h-100'>
          <MDBCardImage
            src='./Images/J6.jpg'
            alt='...'
            position='top'
            class='img-fluid'
          />
          <MDBCardBody>
            <MDBCardTitle className='T'>FANCY DIAMOND JEWELRY</MDBCardTitle>
            <MDBCardText className='in'>
            Fancy diamonds have been associated with royalty and the elite for years as they are extremely rare to find; furthermore, the energetic hues of fancy diamonds can make any jewelry piece appear to be magnificent. Goldiama Diamond is one of the leading diamond manufacturing.
            </MDBCardText>
          </MDBCardBody>  
          </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard data-aos="zoom-in" className='h-100'>
          <MDBCardImage
            src='./Images/J7.jpg'
            alt='...'
            position='top'
            class='img-fluid'
          />
          <MDBCardBody>
            <MDBCardTitle className='T'>BESPOKE JEWELRY</MDBCardTitle>
            <MDBCardText className='in'>
            If you prefer to add a touch of personalization to your jewelry or have it designed as per your taste, then Goldiama Diamond offers you a host of quality boutique services by highly-skilled designers and jewelry makers that deliver professional services and create a memorable experience from start to the end by bringing your imagination to life.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </>
  );
}