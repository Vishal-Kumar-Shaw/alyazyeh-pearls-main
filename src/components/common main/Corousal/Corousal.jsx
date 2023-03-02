import Carousel from 'react-bootstrap/Carousel';
import "./Corousal.css"
import img1 from './Images-Corousal/img1.avif'
import img2 from './Images-Corousal/img2.jpg'
import img3 from './Images-Corousal/img3.avif'


function Corousal() {
  return (
    <Carousel slide={false} className='corousal-bg'>
      <Carousel.Item>
        <img
          className="d-block w-100 pic-style"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='corousal-img-div'>
        <img
          className="d-block w-100 pic-style"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 pic-styl"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousal;