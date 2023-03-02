import React from 'react'
import TripleDiv from './TripleDiv'
import img1 from './images/img1.avif';
import img2 from './images/img2.avif';

const HomeTripleContent = () => {
  return (
    <div>
        <h2>DIAMOND MANUFACTURING</h2>
        <TripleDiv image1={img1} image2={img2} content="Diamond jewelry has been the symbolic expression of love and ever-lasting commitment because of its endurance and sparkling brilliance. Our designers and skilled jewelry makers at  Alyazyeh Pearls put their heart and soul to create exceptional and remarkable timepieces that become the perfect expression of your bond."/>
    </div>
  )
}

export default HomeTripleContent