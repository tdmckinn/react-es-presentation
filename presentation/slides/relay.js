import React from "react";

import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const images = {
  relayPic: require('../../assets/images/relay-logo.svg')
};

const RelaySlides = [
  <Slide transition={["zoom", "fade"]} bgImage={images.relayPic.replace("/", "")} bgDarken={0.75} notes="<ul><li>talk about that</li><li>and that</li></ul>">
    <Heading size={1} caps textColor="primary" textFont="primary">
      Relay
    </Heading>
    <Text textColor="#fff">A JAVASCRIPT FRAMEWORK FOR BUILDING DATA-DRIVEN REACT APPLICATIONS</Text>
  </Slide>,
  <Slide transition={["slide"]} bgColor="black">
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
  <Slide transition={["slide"]} bgColor="black">
    <Text textColor="white">Relay Example</Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require("raw!../../assets/code/relay.example")}
          margin="20px 1px"
        />
      </Fill>
    </Layout> 
  </Slide>  
];

export default RelaySlides;
