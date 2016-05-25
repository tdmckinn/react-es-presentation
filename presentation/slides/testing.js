
import React from 'react';

import {
 Heading, Slide, Text
} from 'spectacle';

const TestingSlides = [
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Testing React
    </Heading>
    <Text textColor="white"> Enzyme by Airbnb </Text>
    <Text textColor="white"> Assert chai-enyze.</Text>
    <Text textColor="white"> Jest by Facebook </Text>
  </Slide>
];

export default TestingSlides;
