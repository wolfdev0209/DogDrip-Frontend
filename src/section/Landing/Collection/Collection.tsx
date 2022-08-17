import React, { useState } from "react";

// @styled-components
import {
  Layout,
  Title,
  Detail,
  SwiperContainer,
  DogImage,
  SwiperPrev,
  SwiperNext,
} from "./Collection.styled";

// @assets
import DogImage1 from "assets/dog1.jpeg";
import DogImage2 from "assets/dog2.jpeg";
import DogImage3 from "assets/dog3.jpeg";
import DogImage4 from "assets/dog4.jpeg";
import DogImage5 from "assets/dog5.jpeg";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// @swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

//------------------------------------------------------

const ImageList = [DogImage1, DogImage2, DogImage3, DogImage4, DogImage5];

const Landing: React.FC = () => {
  return (
    <Layout>
      <Title>DOGDRIP COLLECTION</Title>
      <Detail>
        <br />
        Dogdrip is more than just art but multiple passive income opportunities
        created
        <br />
        for everyone involved on this journey. Starting from flipping NFTs, to
        affiliate
        <br />
        commissions, to launching the merchandise store, to the dogdrip token,
        to
        <br />
        frequent giveaways and other passive income opportunities.
      </Detail>
      <SwiperContainer>
        <Swiper
          slidesPerView={4}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
        >
          {ImageList.map((dogImage, index) => (
            <SwiperSlide>
              <DogImage>
                <img src={dogImage} alt="No DogImage" />
              </DogImage>
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperPrev>
          <div className="prev">
            <BsArrowLeftCircle color="white" size={20} />
          </div>
        </SwiperPrev>
        <SwiperNext>
          <div className="next">
            <BsArrowRightCircle color="white" size={20} />
          </div>
        </SwiperNext>
      </SwiperContainer>
    </Layout>
  );
};

export default Landing;