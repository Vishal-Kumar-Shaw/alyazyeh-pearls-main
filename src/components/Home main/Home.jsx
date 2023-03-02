import React from 'react'
import Title from './Welcome/Title'
import HomeContent from './Content Card/HomeContent'
import img1 from './Home-Images/img1.avif';
import img2 from './Home-Images/img2.avif'
import img3 from './Home-Images/img3.avif'
import VerticalLine from './Vertical Line/VerticalLine';
import HomeTripleContent from './Home Manufacturing/HomeTripleContent';
import ThirdDiv from './Third Div/ThirdDiv';
import HomeImageDiv from './Image-Div/HomeImageDiv';
import img4 from './Home Images/img1.avif';
import img5 from './Home Images/img2.avif';
import img6 from './Home Images/img3.avif';
import Details from './Details-Div/Details';

const Home = () => {
  return (
    <div>
    <Title title="Welcome"/>
    <HomeContent heading="WHO WE ARE" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img1}/>
    <hr/>
    <HomeContent style={{flexDirection:'row-reverse'}} heading="WHY INVEST IN DIAMONDS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img2}/>
    <hr/>
    <HomeContent heading="LATEST NEWS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={img3}/>
    <hr/>
    <VerticalLine/>
    <HomeTripleContent/>
    <VerticalLine/>
    <ThirdDiv title="UNSURPASSED FINE NATURAL DIAMONDS" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    <Details/>
    <ThirdDiv title="INVESTMENT GRADE FANCY DIAMONDS" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    <Details/>
    <HomeImageDiv image1={img4} image2={img5} image3={img6}/>
    </div>

  )
}

export default Home