import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "./Image";

const Slider = (props) => {
  const { post } = props;
  const renderImages = () => {
    return post.map((img) => {
      return <Image key={img.id} img={img.thumbnails} />;
    });
  };
  return (
    <Carousel
      autoPlay={true}
      interval={500}
      infiniteLoop={true}
      showThumbs={false}
    >
      {renderImages()}
    </Carousel>
  );
};

export default Slider;
