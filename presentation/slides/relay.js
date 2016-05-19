
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, Slide, Text, List, ListItem
} from 'spectacle';

const images = {
  relayPic: require('../../assets/images/relay-logo.svg')
};

const RelaySlides = [
  <Slide
    transition={['zoom', 'fade']}
    bgImage={images.relayPic.replace('/', '')}
    bgDarken={0.75}
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <Heading size={1} caps textColor="primary" textFont="primary">
      Relay
    </Heading>
    <Text textColor="#fff">A JAVASCRIPT FRAMEWORK FOR BUILDING DATA-DRIVEN REACT APPLICATIONS</Text>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is Relay and Why Relay?
    </Heading>
    <Text textColor="#fff">React Component data declartion & co-location</Text>
    <Layout>
      <Fill>
        <Text textColor="white">Key concepts of the Relay are:</Text>
        <List textColor="white">
          <ListItem>Declartive</ListItem>
          <ListItem>Colocation</ListItem>
          <ListItem>Mutations</ListItem>
          <ListItem>Auto-fetch, Caching, Error handling</ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Text textColor="white">Relay Example</Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/relay.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading> Why Relay ? </Heading>
    <Text> See Key Concepts... </Text>
  </Slide>,
  <Slide>
    <Heading size={4} caps textColor="primary"
      bgColor="black"> What's the learning curve ? Hard... </Heading>
  </Slide>,
  <Slide>
    <Heading> Well let look at the API...</Heading>
    <Text> Relay.createContainer </Text>
    <Text> fragemnets </Text>
  </Slide>
];

export default RelaySlides;
