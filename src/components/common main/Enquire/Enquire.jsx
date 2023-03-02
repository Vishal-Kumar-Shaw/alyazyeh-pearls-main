import React from "react";
import "./Enquire.css";
import img from './images/img1.jpg'

const Enquire = () => {
  return (
    <div className="enquire-main-div">
      <div className="enquire-content enquire-child-one">
        <h1>AVAIL EXPERT GEMMOLOGICAL SERVICES FROM THE MULTINATIONAL TEAM</h1>
        
        <hr />
        <p>
          AlyazyehPearls takes pride in having a multinational and experienced
          team of gemologists, graders, analysts, polishers, and craftsmen that
          are instilled with a passion to perform, and continue to pursue
          excellence every day.
        </p>
        <a href=' ' className="enquire-link">Enquire Now</a>
      </div>
      <div className="enquire-image">
        <img src={img} alt="enquire-img"/>
      </div>
    </div>
  );
};

export default Enquire;
