import React from "react";

const Images=(props)=>{
      return(
            <div className="imageDiv">
                  <img className="img" src={props.img} alt="img" />
            <div className="downR"></div>
            </div>
      )
}
export default Images;