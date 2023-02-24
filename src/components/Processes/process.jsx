import React from "react";
import CardP from './cards';
import './process.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

const Process = ()=>{
      return (
            <div className="process-div">
                  <div className="head">
                        <h2>SOURCING THE RAREST TO TRADING THE FINEST DIAMONDS</h2>
                        <p className="para">Goldiama is backed by the extensive experience of XTRA GATE L.L.C that adheres to the strictest of compliance frameworks and regulations laid by the Kimberley Process Certification Scheme and the World Diamond Council for the sourcing and trading of conflict-free diamonds.</p>
                  </div>
                  <div className="cards">
                        <CardP
                        img={img1}
                        name="DIAMOND MINING"
                        para="Our upstream operations comprise of detailed planning and strategy whereby we determine the rich source of pedigreed diamonds. Be it land, or sea; our exploration and mining operations, ensure cost-efficiency and result in the extraction of high-value diamonds."/>
                        
                        <CardP
                        img={img2}
                        name="DIAMOND SOURCING"
                        para="We are partnered with the compliant and leading mining companies with direct access to the rough diamond sourcing channels, adhering to the Kimberley Process Certification Scheme regulations, and the World Diamond Council – System of Warranties."/>
                        
                        <CardP
                        img={img3}
                        name="DIAMOND TRADING"
                        para="Our success lies in offering the finest and responsibly sourced diamonds at competitive prices along with value-added services. The diamonds we source, entail Kimberley Process Certification and have been sourced as per the conflict-free standards and compliance policies."/>
                  </div>
            </div>
            
      )
}

export default Process;