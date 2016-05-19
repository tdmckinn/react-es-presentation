
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Heading,
  Quote, Slide, Text
} from 'spectacle';

const images = {
  reactEco: require('../../assets/images/react-eco.png')
};

const gifs = {
  happy: require('../../assets/gifs/happy.gif')
};

const IntroSlides = [
  <Slide transition={['zoom']} bgColor="black" bgImage={images.reactEco} bgDarken={0.75}>
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
  <Slide
    transition={['slide']}
    bgColor="black"
    notes="You can even put notes on your slide. How awesome is that?"
  >
    <Heading size={1} caps textColor="primary" textFont="primary">
      Agenda
    </Heading>
    <div style={{ color: '#fff' }}>
      <ol>
        <li>React JS</li>
        <li>GraphQL</li>
        <li>Relay</li>
        <li>Redux</li>
        <li>APP DEMO!!!</li>
        <li>Honorable Mentions</li>
      </ol>
    </div>
  </Slide>,
  <Slide bgColor="black">,
    <Heading size={2} textColor="white"> Who's using these tools </Heading>
    <Text textColor="white" textSize="2.0rem"> React - https://github.com/facebook/react/wiki/Sites-Using-React </Text>
    <Text textColor="white" textSize="2.0rem"> Relay - https://github.com/facebook/relay/blob/master/USERS.md </Text>
    <Text textColor="white" textSize="2.0rem"> GrahpQL - https://github.com/facebook/react/wiki/Sites-Using-React </Text>
    <Text textColor="white" textSize="2.0rem"> Redux - https://github.com/reactjs/redux/issues/310 </Text>
  </Slide>,
  <Slide
    transition={['slide']}
    bgColor="black"
  >
    <Heading size={1} caps textColor="primary" textFont="primary">
      Key Terms
    </Heading>
    <div style={{ color: '#fff' }}>
      <ol>
        <li> Higher Order Components </li>
      </ol>
    </div>
  </Slide>
];

export default IntroSlides;
