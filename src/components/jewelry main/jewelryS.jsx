import React from "react";
import './jewelryS.css';
import img1 from './img/img1.webp'
import img2 from './img/img2.webp'
import img3 from './img/img3.webp'
import HomeContent from '../Home main/Content Card/HomeContent';
import "../Home main/Content Card/HomeContent.css";
import "../Home main/Home Manufacturing/TripleDiv.css";
import VerticalLine from "../Home main/Vertical Line/VerticalLine";
import "../Home main/Vertical Line/VerticalLine.css";
import Title from "../Home main/Welcome/Title";
import HomeImageDiv from "../Home main/Image-Div/HomeImageDiv";
import TripleDiv from '../Home main/Home Manufacturing/TripleDiv';
import J4 from './img/1.jpg';
import J6 from './img/2.jpg';
import J9 from './img/3.jpg';
import J1 from './img/4.jpg';
import J10 from './img/5.jpg'
import J2 from './img/img4.webp';
import {useEffect} from 'react';




const JewelryS=()=>{
      return(
      <>          <div>
                  <br></br>
                  <br></br>

                  <Title  title="LUXURY JEWELRY"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <HomeImageDiv  image1={J10} image2={J1} image3={J9}/>
                  <br></br>
                  <br></br>
                  <VerticalLine/>
                  <br></br>
                  <br></br>
                  <Title  title="OUR COLLECTION"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <HomeContent  heading="SIGNATURE COLLECTION" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img1}/>
                  <hr/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <HomeContent  style={{flexDirection:'row-reverse'}} heading="FANCY DIAMOND COLLECTION" content="Fancy diamonds have been associated with royalty and the elite for years as they are extremely rare to find; furthermore, the energetic hues of fancy diamonds can make any jewelry piece appear to be magnificent.
                  Goldiama Diamond is one of the leading diamond manufacturing companies in the GCC region with a large inventory of unique fancy diamonds. We take pride in having designers and jewelry makers that successfully achieve a distinctive blend of luxury, class, and exclusivity in all the pieces of our Fancy Diamond Collection." image={img2}/>
                  <hr/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <HomeContent  heading="BESPOKE JEWELRY" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img3}/>
                  <hr/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <HomeContent  style={{flexDirection:'row-reverse'}} heading="JEWELRY REPAIR & RESTORATION" content="Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life." image={img1}/>
                  <hr/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <VerticalLine/>
                  
                  <br></br>
                  <br></br>
                  <br></br>
                  <div data-aos="zoom-out-up">
                  <h2>JEWELRY REPAIR & RESTORATION</h2>
                  <TripleDiv image1={J4} image2={J6} content="Diamond jewelry worn regularly can be exposed to wear and tear or damage and require more than one restoration and repair services. Therefore, our talented craftsmen specialize in various restoration and repair techniques to ensure the optimal maintenance of your most valuable pieces"/>
                  </div>
                  
                  <br></br>
                  <br></br>
                  </div>
          
       </>
      )
}
export default JewelryS;