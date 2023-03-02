import React from "react";
import { Card } from "react-bootstrap";
import Cards from './card';
import Images from "./images";
import './jewelryS.css';
import img1 from './img/img1.webp'
import img2 from './img/img2.webp'
import img3 from './img/img3.webp'
import img4 from './img/img4.webp'


const JewelryS=()=>{
      return(
            <div className="divBodyJ">
                  <h1 className="headingJ">LUXURY JEWELRY</h1>
                  <p className="paraJ">Diamond jewelry has been the symbolic expression of love and ever-lasting commitment because of its endurance and sparkling brilliance. Our designers and skilled jewelry makers at Goldiama Diamond put their heart and soul to create exceptional and remarkable timepieces that become the perfect expression of your bond. Goldiama Diamond specializes in making high-end intricate jewelry, along with repairing and restoration of diamonds. We enable and facilitate new designers and entrepreneurs inclined towards launching their branded jewelry with our custom designing and value-added services. Furthermore, we take pride in incorporating the most superior natural diamonds and the rarest fancy diamonds in our creations, manufactured at the state-of-the-art Goldiama lab and factory that fulfill the highest grading standards of GIA.</p>

                  <div className="sec1">
                  <Images className='imageDiv1'
                  classImage='imgJ1'
                  img={img1}/>
                  <Cards className='cardBodyJ'
                  title="SIGNATURE COLLECTION"
                  para="Goldiama Diamond’s Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life."/>
                  </div>

                  <div className="sec2">
                  
                  <Cards className='cardBody2'
                  title="FANCY DIAMOND COLLECTION"
                  para="Fancy diamonds have been associated with royalty and the elite for years as they are extremely rare to find; furthermore, the energetic hues of fancy diamonds can make any jewelry piece appear to be magnificent.
                  Goldiama Diamond is one of the leading diamond manufacturing companies in the GCC region with a large inventory of unique fancy diamonds. We take pride in having designers and jewelry makers that successfully achieve a distinctive blend of luxury, class, and exclusivity in all the pieces of our Fancy Diamond Collection."/>
                  <Images className='imageDiv2'
                  classImage='imgJ2'
                  img={img2}/>
                  </div>

                  <div className="sec1">
                  <Images className='imageDiv1'
                  classImage='imgJ1'
                  img={img3}/>
                  <Cards className='cardBodyJ'
                  title="BESPOKE JEWELRY"
                  para="Goldiama Diamond’s Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life."/>
                  </div>

                  <div className="sec2">
                  
                  <Cards className='cardBody2'
                  title="JEWELRY REPAIR & RESTORATION"
                  para="Goldiama Diamond’s Signature Collection features astonishing cuts, styles, and designs that bring out the inimitable beauty of every diamond embedded in the jewelry.
                  Our spirit of innovation enables us to perceive inspiring and tasteful designs that showcase creativity and sophistication. Whether you prefer to make a traditional or a classy style statement, our creations are sure to resonate with the special moments in your life."/>
                  <Images className='imageDiv2'
                  classImage='imgJ2'
                  img={img4}/>
                  </div>
                  
                  
                  
            </div>
      )
}
export default JewelryS;