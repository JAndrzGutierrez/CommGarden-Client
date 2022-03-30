import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import communitygarden from "../../Images/communitygarden.png";
import Container from "react-bootstrap/Container"

const CarouselImage = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
<Container fluid="sm">
<Image
            
            className="d-block w-100"
            src={communitygarden}
            alt="First slide"
          />
</Container>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
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
    </>
  );
};

export default CarouselImage;
