import React from "react";

// Import Spectacle Core tags
import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

import { IntroSlides, ConclusionSlides,
  ReactSlides, RelaySlides, ReduxSlides, GraphQLSlides  } from './slides';
//import Interactive from "../src/interactive";

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/images/city.jpg'),
  kat: require('../assets/images/kat.png'),
  logo: require('../assets/images/formidable-logo.svg'),
  markdown: require('../assets/images/markdown.png'),
  reactLogo: require('../assets/images/reactjs-logo.svg'),
  reactEco: require('../assets/images/react-eco.png'),
  reactPic: require('../assets/images/reactpic.jpeg'),
  facebook: require('../assets/images/facebook.png'),
  airbnb: require('../assets/images/airbnb.png'),
  dropbox: require('../assets/images/dropbox.png'),
  flowType: require('../assets/images/flow-hero-logo.png'),
  jurrasicWave: require('../assets/images/jurrasic-wave-v1.png')
};

const gifs = {
  rockets: require('../assets/gifs/rockets.gif'),
  easter: require('../assets/gifs/easterhomer.gif'),
  happy: require('../assets/gifs/happy.gif'),
  idea: require('../assets/gifs/idea.gif')
}

preloader(images);

const theme = createTheme({
  primary: '#00D8FF'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          { React.Children.toArray( [IntroSlides,
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.happy}>
          </Slide>,
          ReactSlides,
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.idea}>
          </Slide>,  
          GraphQLSlides,  
          <Slide transition={["zoom"]} bgColor="black" >
            <Heading size={1} textColor="tertiary">
              App Demo...
            </Heading>
            <img src={images.jurrasicWave.replace("/", "") } style={{maxWidth: 800}} />
          </Slide>,
          <Slide>
           <div>
           Pros & Cons
           </div>
          </Slide>,
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="tertiary">
              Honoroable Mentions...
            </Heading>
            <List textColor="white">
              <ListItem>React Native</ListItem>
              <ListItem>Flow</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>Faclorjs By Netflix</ListItem>
            </List>
          </Slide>,
          ConclusionSlides
          ])} 
        </Deck>
      </Spectacle>
    );
  }
}
