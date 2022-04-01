import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
// images import
import communitygarden from "../../Images/communitygarden.png";
import garden from "../../Images/garden.png";
import vegetables from "../../Images/vegetables.png";

const CarouselImage = () => {
  return (
    <Container fluid="sm">
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src={communitygarden}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Community Garden</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100"
            src={garden}
            alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={vegetables} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselImage;
