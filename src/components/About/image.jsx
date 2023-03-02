import React from "react";

const Images=(props)=>{
      return(
            <div className="imageDiv">
                  <img className="img" src={props.img} alt="img" width={'200px'} />
            <div className="downR"></div>
            </div>
      )
}
export default Images;