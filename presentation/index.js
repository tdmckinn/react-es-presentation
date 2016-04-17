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
    const thankyouListTextSize = '26px';
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          {IntroSlides}
          {ReactSlides}
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.idea}>
          </Slide>     
          {GraphQLSlides}
          <Slide transition={["slide"]} bgColor="black">
           <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              What is Relay? React Component data declartion & co-location
            </Heading>
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
          </Slide>
           <Slide transition={["slide"]} bgColor="black">
            <Text textColor="white">Relay Example </Text>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/relay.example")}
                  margin="20px 1px"
                />
              </Fill>
            </Layout> 
          </Slide>
          {/*<Slide transition={["slide"]} bgColor="primary" bgImage={images.flowType.replace("/", "")} bgDarken={0.85}>
  
          </Slide>*/}
          
          <Slide transition={["zoom"]} bgColor="black" >
            <Heading size={1} textColor="tertiary">
              App Demo...
            </Heading>
            <img src={images.jurrasicWave.replace("/", "") } style={{maxWidth: 800}} />
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.easter}>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="tertiary">
              Honoroable Mentions...
            </Heading>
            <List textColor="white">
              <ListItem>React Native</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>Faclorjs By Netflix</ListItem>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
              Thank You
            </Heading>
            <Layout>
              <Fill>
              <Text> Me: </Text>
                <List>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://github.com/tdmckinn/jurastic-waves">Jurrasic Waves</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="http://www.formidablelabs.com">Github: @tdmckinn</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="http://www.formidablelabs.com">Twitter: @TirellMckinnon</Link></ListItem>
                </List>
              </Fill>
              <Fill>
                <Text>Resources =></Text>
                <List>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://facebook.github.io/react/">Reactjs</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://facebook.github.io/relay/">Relay</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="http://graphql.org/">GraphQL</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="http://flowtype.org/">Flow</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://github.com/FormidableLabs/spectacle">Spectacle Presentation Library</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://stackoverflow.com/research/developer-survey-2016">Stackoverflow Devloper Survey</Link></ListItem>
                </List>
              </Fill>
               <Fill>
                <Text>Resources Cont..</Text>
                <List>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://github.com/reactjs">React Community aka (rackt)</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://github.com/enaqx/awesome-react">Awseome React</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://github.com/chentsulin/awesome-graphql">Awseome GraphQL</Link></ListItem>
                  <ListItem textSize={thankyouListTextSize}><Link href="https://app.moqups.com">Moqups</Link></ListItem>
                </List>
              </Fill>
            </Layout> 
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
