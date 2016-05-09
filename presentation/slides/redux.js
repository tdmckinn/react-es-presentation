
import React from 'react';

import {
  Heading, Slide, Text,
  Layout, Fill, List, ListItem
} from 'spectacle';

const images = {
  reduxLogo: require('../../assets/images/reduxLogo.png')
};

const ReduxSlides = [
  <Slide transition={['zoom', 'fade']} bgColor="black">
    <img src={images.reduxLogo.replace('/', '') } />
    <Text textColor="#fff">Client Side State Management</Text>
  </Slide>,
  <Slide transition={['zoom', 'fade']} bgColor="black" bgDarken={0.85}>
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is Redux?
    </Heading>
    <Layout>
      <Fill>
        <Text textColor="white">Three Principles:</Text>
        <List textColor="white">
          <ListItem>Single Source of Truth</ListItem>
          <ListItem>State is read-only</ListItem>
          <ListItem>Changes are made with pure functions</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading> Why Redux ? </Heading>
    <Text> Single Source of Truth, Testable, encorugages best practices in JS development, and provides
     intergration to enable stat machines... </Text>
  </Slide>,
  <Slide>
    <Heading> What's the learning curve ? Easy </Heading>
  </Slide>,
  <Slide>
    <Heading> Well lets explore the API </Heading>
  </SLide>
];

export default ReduxSlides;
