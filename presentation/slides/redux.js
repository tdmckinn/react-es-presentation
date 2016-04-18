import React from "react";

import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const ReduxSlides = [
  <Slide transition={["zoom", "fade"]} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is Redux? 
    </Heading>
    <Text textColor="#fff">Client Side State Management</Text>
  </Slide>,
];

export default ReduxSlides;
