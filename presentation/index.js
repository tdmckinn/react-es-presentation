import React from "react";

// Import Spectacle Core tags
import { Appear, BlockQuote, Cite, CodePane, Deck,
         Fill, Heading, Image, Layout, Link,
         ListItem, List, Markdown, Quote, Slide,
         Spectacle, Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
//import Interactive from "../src/interactive";

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
  reactPic: require('../assets/reactpic.jpeg'),
  facebook: require('../assets/facebook.png'),
  airbnb: require('../assets/airbnb.png'),
  dropbox: require('../assets/dropbox.png'),
  flowType: require('../assets/flow-hero-logo.png'),
  jurrasicWave: require('../assets/jurrasic-wave-v1.png')
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
    const thankyouListTextSize = '26px';
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
              Agenda
            </Heading>
            <div style={{color: '#fff'}}>
              <ol>
                <li>React JS</li>
                <li>Relay</li>
                <li>GraphQL</li>
                <li>Flow</li>
                *<li>APP DEMO!!!</li>
              </ol>
            </div>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.happy}>
          </Slide>
          {/*<Slide transition={["zoom"]} bgColor="black" bgImage={gifs.rockets}>
          </Slide>*/}
          <Slide transition={["zoom", "fade"]} bgImage={images.reactPic.replace("/", "")} bgDarken={0.75} notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} caps textColor="primary" textFont="primary">
              ReactJS
            </Heading>
            <Text> UI data & rendering </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
           <Layout>
            <Fill>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/code/html-jsx.example")}
                margin="20px 1px"
              />
            <Text><Link textColor="primary" href="https://babeljs.io/repl/"> JSX to JS Transformer</Link></Text>
            </Fill>
            <Fill>
              <CodePane
                lang="jsx"
                source={require("raw!../assets/code/jsx-js.example")}
                margin="20px 9px"
              />
           </Fill>
          </Layout> 
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Text textColor="white">Container / Presentational / Functional / Pure / Impure </Text>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/stateful.example")}
                  margin="20px 1px"
                />
              </Fill>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/stateless.example")}
                  margin="20px 9px"
                />
            </Fill>
            </Layout> 
          </Slide>
          <Slide transition={["zoom"]} bgColor="black">
           <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
             Why Virtual DOM?
            </Heading>
            <Text textColor="white">DOM Abstraction, DOM manipulations are slow </Text>
            <Text textColor="white">Efficient diff algorithms.
            Batching DOM read/write operations.
            Efficient update of sub-tree only.</Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="black" bgImage={gifs.idea}>
          </Slide>     
          <Slide transition={["zoom", "fade"]} bgImage={images.city.replace("/", "")} bgDarken={0.85}>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              What is GraphQL? Single API endpoint data retrieval 
            </Heading>
            <Layout>
              <Fill>
                  <Text textColor="white">GraphQL is a query language created by Facebook in 2012 which provides a common interface between the client and the server for data fetching and manipulations.
                  </Text>
              </Fill>
              <Fill>
                <Text textColor="white">Key concepts of the GraphQL query language are:</Text>
                <List textColor="white">
                  <ListItem>Hierarchical</ListItem>
                  <ListItem>Product‐centric</ListItem>
                  <ListItem>Strong‐typing</ListItem>
                  <ListItem>Client‐specified queries</ListItem>
                  <ListItem>Introspective</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} textColor="primary" textFont="primary">
               Getting Started...
            </Heading>
            <List textColor="white">
              <ListItem>A GraphQL Schema: A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need.</ListItem>
              <ListItem>A GraphQL Server: Any server can be taught to load a schema and speak GraphQL</ListItem>
              <ListItem>Relay: Relay speaks to GraphQL servers through a network layer. The network layer that ships with Relay is compatible with express-graphql out of the box, and will continue to evolve as we add new features to the transport.</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Text textColor="white">GrahpQL Example </Text>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../assets/code/graphQL.example")}
                  margin="20px 1px"
                />
              </Fill>
            </Layout> 
          </Slide>
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
