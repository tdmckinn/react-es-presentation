
import React from 'react';

import {
  Heading, Slide, Text,
  Layout, Fill, List, ListItem
} from 'spectacle';

const ReduxSlides = [
  <Slide transition={['zoom', 'fade']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Redux
    </Heading>
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
  </Slide>
];

export default ReduxSlides;
