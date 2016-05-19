
import React from 'react';


import {
  Deck, Heading, ListItem, Text,
  List, Slide, Spectacle
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import { IntroSlides, ConclusionSlides,
  ReactSlides, RelaySlides, ReduxSlides, GraphQLSlides, TestingSlides } from './slides';
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
              TestingSlides,
              <Slide>
                <Heading> Pros & Cons </Heading>
                 <Text> Why does this libs exsit ? </Text>
              </Slide>,
              <Slide transition={['zoom']} bgColor="black" >
                <Heading size={1} textColor="tertiary">
                  App Demo...
                </Heading>
                <img src={images.jurrasicWave.replace('/', '') } style={{ maxWidth: 800 }} />
              </Slide>,
              ConclusionSlides
            ])
          }
        </Deck>
      </Spectacle>
    );
  }
}
