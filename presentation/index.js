// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck,
         Fill, Heading, Image, Layout, Link,
         ListItem, List, Markdown, Quote, Slide,
         Spectacle, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  reactLogo: require('../assets/reactjs-logo.svg'),
  reactEco: require('../assets/react-eco.png'),
};

const gifs = {
  rockets: require('../assets/rockets.gif'),
  easter: require('../assets/easterhomer.gif'),
  happy: require('../assets/happy.gif'),
  idea: require('../assets/idea.gif')
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
          <Slide transition={["zoom"]} bgColor="black" bgImage={images.reactEco} bgDarken={0.75}>
            <Heading size={2} fit caps lineHeight={2} textColor="white">
              The ReactJS Ecosystem
            </Heading>
            <Heading size={1} fit>
              ReactJS, Relay, GraphQL, Flow, Redux, & (Babel)
            </Heading>
          </Slide>
          <Slide bgColor="black">
            <BlockQuote>
              <Quote>{`If you think you need to be an expert about something to 
                    start talking, it's far too late. We need to hear the journey.`}
              </Quote>
              <Cite>@getify #FluentConf</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Plan
            </Heading>
            <div style={{color: '#fff'}}>
              <ol>
                <li>React JS</li>
                <li>Relay</li>
                <li>GraphQL</li>
                <li>Flow</li>
                <li>APP DEMO!!!</li>
              </ol>
            </div>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.idea}>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.rockets}>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} caps textColor="primary" textFont="primary">
              ReactJS
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps >GraphQL</Heading>
            <Layout>
              <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    What is GraphQL?
                  </Heading>
                  <Text>GraphQL is a query language created by Facebook in 2012 which provides a common interface between the client and the server for data fetching and manipulations.
                  </Text>
              </Fill>
              <Fill>
                <Text>Key concepts of the GraphQL query language are:</Text>
                <List>
                  <ListItem>Hierarchical</ListItem>
                  <ListItem>Product‐centric</ListItem>
                  <ListItem>Strong‐typing</ListItem>
                  <ListItem>Client‐specified queries</ListItem>
                  <ListItem>Introspective</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" >
            <Heading size={1} caps fit textColor="tertiary">
              App Demo...
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.easter}>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={2} caps fit lineHeight={1} textColor="white">
              Thank You
            </Heading>
            <List>
              <ListItem><Link href="https://github.com/tdmckinn/jurastic-waves">App Demo Jurrasic Waves</Link></ListItem>
              <ListItem><Link href="http://www.formidablelabs.com">Github: @tdmckinn</Link></ListItem>
              <ListItem><Link href="http://www.formidablelabs.com">Twitter: @TirellMckinnon</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
