import React from "react";
import Cards from './Cards';
import './Services.css';
import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';


const Services = ()=>{
      useEffect(() => {
            AOS.init({
              duration : 2000
            });
          }, []);
      return (
            <div className="process-div">
                 
                  <div className="cards">
                        <Cards
                        img={img1}
                        name="WHO ARE WE?"
                        para="ALYAZYEH PEARLS is one of the leading Diamond Trading & Diamond Sourcing in the GCC region, offering the best value for diamonds & specialized diamond services…"
                        data-aos="zoom-in"
                        />
                        
                        <Cards data-aos="zoom-in"
                        img={img2}
                        name="WHY INVEST IN DIAMONDS"
                        para="Diamonds are not only valuable assets, but they are a haven for investment with promising lucrative returns. Be assured, unlike other assets, investing in diamonds is more stable and profitable…"
                        
                        />
                        
                        <Cards
                        img={img3}
                        name="LATEST NEWS"
                        para="Goldiama Diamond continues to strengthen its network and facilitate clients across the globe in the value chain. View the latest updates at our end or connect with us via the social platforms…"
                        data-aos="zoom-in"
                        />
                  </div>
            </div>
            
      )
}

export default Services;