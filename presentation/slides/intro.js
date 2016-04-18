import React from "react";

// Import Spectacle Core tags
import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const images = {
  reactEco: require('../../assets/images/react-eco.png')
};

const gifs = {
  happy: require('../../assets/gifs/happy.gif') 
}

const IntroSlides = [
  <Slide transition={["zoom"]} bgColor="black" bgImage={images.reactEco} bgDarken={0.75}>
    <Heading size={2} fit caps lineHeight={2} textColor="white">
      The ReactJS Ecosystem
    </Heading>
    <Heading size={1} fit>
      ReactJS, Relay, GraphQL, Redux, & (Babel)
    </Heading>
  </Slide>,
  <Slide bgColor="black">
    <BlockQuote>
      <Quote>
      If you think you need to be an expert about something to 
      start talking, it's far too late. We need to hear the journey.
      </Quote>
      <Cite>@getify #FluentConf</Cite>
    </BlockQuote>
  </Slide>,
  <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
    <Heading size={1} caps textColor="primary" textFont="primary">
      Agenda
    </Heading>
    <div style={{color: '#fff'}}>
      <ol>
        <li>React JS</li>
        <li>GraphQL</li>
        <li>Relay</li>
        <li>Redux</li>
        <li>APP DEMO!!!</li>
        <li>Honorable Mentions</li>
      </ol>
    </div>
  </Slide>
];

export default IntroSlides;
