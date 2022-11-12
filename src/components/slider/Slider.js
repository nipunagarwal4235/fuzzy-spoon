import React from 'react';

import { Carousel } from 'react-carousel-minimal';

import {
  captionStyle,
  slideNumberStyle,
  sliderData,
} from '../../constants/sliderConstant';

function Slider() {
  return (
    <div>
    <Carousel
            data={sliderData}
            time={2000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "600px",
            }}
            />
    </div>
  )
}

export default Slider