
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, Link, Slide, List,
  ListItem, Text
} from 'spectacle';

const images = {
  reactPic: require('../../assets/images/reactpic.jpeg')
};

const ReactSlides = [
  <Slide
    transition={['zoom', 'fade']} bgImage={images.reactPic.replace('/', '')}
    bgDarken={0.75}
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <Heading size={1} caps textColor="primary" textFont="primary">
      ReactJS
    </Heading>
    <Text textColor="#fff"> UI data & rendering </Text>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Layout>
    <Fill>
      <CodePane
        lang="jsx"
        source={require('raw!../../assets/code/html-jsx.example')}
        margin="20px 1px"
      />
    <Text><Link textColor="primary" href="https://babeljs.io/repl/"> JSX to JS Transformer</Link></Text>
    </Fill>
    <Fill>
      <CodePane
        lang="jsx"
        source={require('raw!../../assets/code/jsx-js.example')}
        margin="20px 9px"
      />
    </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Text textColor="white">State Machines / Containers / Presentational / Functional </Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/stateful.example')}
          margin="20px 1px"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/stateless.example')}
          margin="20px 9px"
        />
    </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading> Alternative to JSX </Heading>
  </Slide>,
  <Slide>
    <Heading> Why React ? </Heading>
    <Text> Declaritve, Predicateble, Testable, & Realibablity ++Javascript </Text>
  </Slide>,
  <Slide>
    <Heading> Declartive and Composoble</Heading>
  </Slide>,
  <Slide>
    <Heading> What's the learning curve ? Awseome </Heading>
  </Slide>,
  <Slide>
    <Heading> Well let look at the API...</Heading>
    <Text> The Component Lifecycle</Text>
    <List textColor="white">
      <ListItem>componentWillMount – Fired once, before initial rendering occurs. 
      Good place to wire-up message listeners. this.setState doesn't work here.
      </ListItem>
      <ListItem>componentDidMount – Fired once, after initial rendering occurs.
        Can use this.getDOMNode().
      </ListItem>  
      <ListItem>componentDidUpdate - Fired after the component's updates are made to the DOM.
        Can use this.getDOMNode() for updates.
      </ListItem>
      <ListItem>componentWillReceiveProps – Fired when a component is receiving new props.
        You might want to this.setState depending on the props.
      </ListItem>
      <ListItem>shouldComponentUpdate - Fired before rendering when new props or state are received.
        return false if you know an update isn't needed.
      </ListItem>
      <ListItem>componentWillUnmount – Fired immediately before a component is unmounted from the DOM.
        Good place to remove message listeners or general clean up.
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>Access the to DOM </Heading>
    <Text> Getting a handle on references </Text>
  </Slide>,
  <Slide>
    <Heading>More on State...</Heading>
    <Text> Default State aka Initial State</Text>
  </Slide>,
  <Slide>
    <Heading>More on State...</Heading>
    <Text>Updating State </Text>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Why Virtual DOM?
    </Heading>
    <Text textColor="white">DOM Abstraction, DOM manipulations are slow </Text>
    <Text textColor="white">Efficient diff algorithms.
    Batching DOM read/write operations.
    Efficient update of sub-tree only.</Text>
  </Slide>
];

export default ReactSlides;
