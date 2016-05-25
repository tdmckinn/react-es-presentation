
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, Slide, Text, List, ListItem
} from 'spectacle';

const images = {
  relayPic: require('../../assets/images/relay-logo.svg')
};
const orange = '#f26b00';

const RelaySlides = [
  <Slide
    transition={['zoom', 'fade']}
    bgColor="black"
    bgImage={images.relayPic}
    bgDarken={0.75}
    bgSize="contain"
    bgRepeat="no-repeat"
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <Heading size={1} caps textColor={orange} textFont="primary">
      Relay
    </Heading>
    <Text textColor="#fff">A JAVASCRIPT FRAMEWORK FOR BUILDING DATA-DRIVEN REACT APPLICATIONS</Text>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is Relay ?
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
  <Slide transition={['slide']} bgColor="black">
    <Text textColor="white">Relay Mutations </Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/relayMutation1.example')}
          margin="20px 5px"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/relayMutation2.example')}
          margin="20px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor={orange}>
    <Heading> Why Relay ? </Heading>
    <Text> See Key Concepts... </Text>
  </Slide>,
  <Slide bgColor={orange}>
    <Heading size={4} caps textColor="white"
      bgColor="black"
    > What's the learning curve ? Hard... </Heading>
  </Slide>,
  <Slide bgColor={orange}>
    <Heading> Lets look at the API...</Heading>
    <Text> Relay.createContainer </Text>
    <Text> fragemnets </Text>
  </Slide>
];

export default RelaySlides;
