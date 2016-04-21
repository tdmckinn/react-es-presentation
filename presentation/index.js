
import React from 'react';

// Import Spectacle Core tags
import {
  Deck, Heading, ListItem,
  List, Slide, Spectacle
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import { IntroSlides, ConclusionSlides,
  ReactSlides, RelaySlides, ReduxSlides, GraphQLSlides } from './slides';
// import Interactive from "../src/interactive";

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  facebook: require('../assets/images/facebook.png'),
  airbnb: require('../assets/images/airbnb.png'),
  dropbox: require('../assets/images/dropbox.png'),
  jurrasicWave: require('../assets/images/jurrasic-wave-v1.png')
};

const gifs = {
  rockets: require('../assets/gifs/rockets.gif'),
  easter: require('../assets/gifs/easterhomer.gif'),
  happy: require('../assets/gifs/happy.gif'),
  idea: require('../assets/gifs/idea.gif')
};

preloader(images);

const theme = createTheme({
  primary: '#00D8FF'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          {
            React.Children.toArray([
              IntroSlides,
              <Slide transition={['zoom']} bgColor="black" bgImage={gifs.happy} />,
              ReactSlides,
              <Slide transition={['zoom']} bgColor="black" bgImage={gifs.idea} />,
              GraphQLSlides,
              RelaySlides,
              ReduxSlides,
              <Slide transition={['zoom']} bgColor="black" >
                <Heading size={1} textColor="tertiary">
                  App Demo...
                </Heading>
                <img src={images.jurrasicWave.replace('/', '') } style={{ maxWidth: 800 }} />
              </Slide>,
              <Slide>
              <div>
              Pros & Cons
              </div>
              </Slide>,
              <Slide transition={['zoom']} bgColor="black">
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
            ])
          }
        </Deck>
      </Spectacle>
    );
  }
}
