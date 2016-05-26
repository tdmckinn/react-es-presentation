
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, Link, Slide, List,
  ListItem, Text, Code
} from 'spectacle';

const images = {
  reactPic: require('../../assets/images/reactpic.jpeg')
};
const styleColor = '#00D8FF';
const blue = { color: '#00D8FF' };

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
  <Slide bgColor="black">
    <Heading textColor={styleColor}> Ideology </Heading>
    <List>
      <ListItem textColor="white"> Functional Lite approach </ListItem>
      <ListItem textColor="white"> Prefers Immutablity and protects against it </ListItem>
      <ListItem textColor="white"> Components as functions / Isolation </ListItem>
      <ListItem textColor="white"> One-way reactive data flow </ListItem>
    </List>
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
    <Text textColor="white">
      <span style={blue}> State Machines </span> / Containers /
      <span style={blue}> Presentational </span> / Functional
    </Text>
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
  <Slide transition={['zoom']} bgColor="black">
    <Heading textColor={styleColor}> Alternative to JSX </Heading>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} textColor="primary" textFont="primary">
      React hyperscript
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/jsx-alt1.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} textColor="primary" textFont="primary">
      React Uber r-dom
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/jsx-alt2.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} textColor="primary" textFont="primary">
      JS Destructuring
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/jsx-altdescrut.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading> Why React ? </Heading>
    <Text>
      Simple, Declarative, Composable, Predictable, & Reliability ++JavaScript
    </Text>
  </Slide>,
  <Slide>
    <Heading> What's the learning curve ?	Easy </Heading>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
     Lets look at the API...
    </Heading>
    <Text textColor="white"> The Component Lifecycle</Text>
    <List textColor="white">
      <ListItem textSize="1.6rem">
        <span style={blue}> componentWillMount </span>
         – Fired once, before initial rendering occurs.
      Good place to wire-up message listeners. this.setState doesn't work here.
      </ListItem>
      <ListItem textSize="1.6rem">
         <span style={blue}> componentDidMount </span> – Fired once, after initial rendering occurs.
        Can use this.getDOMNode().
      </ListItem>
      <ListItem textSize="1.6rem">
         <span style={blue}> componentDidUpdate </span>
         - Fired after the component's updates are made to the DOM.
        Can use this.getDOMNode() for updates.
      </ListItem>
      <ListItem textSize="1.6rem">
         <span style={blue}> componentWillReceiveProps </span>
         – Fired when a component is receiving new props.
        You might want to this.setState depending on the props.
      </ListItem>
      <ListItem textSize="1.6rem">
         <span style={blue}> shouldComponentUpdate </span>
         - Fired before rendering when new props or state are received.
          ( return false if you know an update isn't needed. )
      </ListItem>
      <ListItem textSize="1.6rem">
         <span style={blue}> componentWillUnmount </span>
         – Fired immediately before a component is unmounted from the DOM.
        Good place to remove message listeners or general clean up.
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading>Access to the DOM </Heading>
    <Text> Getting a handle on references </Text>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Why Virtual DOM?
    </Heading>
    <Text textColor="white">DOM Abstraction, DOM manipulations are slow </Text>
    <Text textColor="white">Efficient diff algorithms.
    Batching DOM read/write operations.
    Efficient update of sub-tree only.</Text>
  </Slide>,
  <Slide>
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      Styling Techniques and or Options
    </Heading>
    <List>
      <ListItem>Inline Styles</ListItem>
      <ListItem>Require extract CSS</ListItem>
      <ListItem>CSS	Modules </ListItem>
    </List>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
     Inline Styles Default
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/reactInlineStyles.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
     Inline Styles @Radium
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/reactInlineStylesRd.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
    Require and Extraction
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/reactRequireExtraction.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
    CSS Modules
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/reactCSSModules.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>
];

export default ReactSlides;
