
import React from 'react';

import {
  Heading, Slide, Text,
  Layout, Fill, List, ListItem
} from 'spectacle';

const images = {
  reduxLogo: require('../../assets/images/redux.svg')
};
const purple = '#764ABC';
const ReduxSlides = [
  <Slide
    transition={['zoom', 'fade']}
    bgImage={images.reduxLogo}
    bgColor="black"
    bgDarken={0.75}
    bgSize="contain"
    bgRepeat="no-repeat"
  >
    <Heading textColor="white" size={4}> Redux </Heading>
    <Text textColor="#fff">Client Side State Management</Text>
  </Slide>,
  <Slide transition={['zoom', 'fade']} bgColor="black" bgDarken={0.85}>
    <Heading size={4} caps textColor={purple} bgColor="white" margin={10}>
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
  <Slide bgColor={purple}>
    <Heading> Why Redux ? </Heading>
    <Text> Single Source of Truth, Testable, encorugages best practices in JS development,
      and provides integration to enable state machines...
    </Text>
  </Slide>,
  <Slide bgColor={purple}>
    <Heading size={4} caps textColor={purple}
      bgColor="black"
    > What's the learning curve ? Easy </Heading>
  </Slide>,
  <Slide bgColor={purple}>
    <Heading> Lets look at the API... </Heading>
  </Slide>
];

export default ReduxSlides;
