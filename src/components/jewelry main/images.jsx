import React from "react";

const Images=(props)=>{
      return(
            <div className={props.className}>
                  <img className={props.classImage} src={props.img} alt="img" />
            </div>
      )
}
export default Images;