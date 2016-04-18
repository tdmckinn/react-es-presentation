import React from "react";

import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const RelaySlides = [
  <Slide transition={["slide"]} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is Relay? 
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
