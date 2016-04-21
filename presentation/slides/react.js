
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, Link, Slide,
  Text
} from 'spectacle';

const images = {
  reactPic: require('../../assets/images/reactpic.jpeg')
};

const ReactSlides = [
  <Slide transition={['zoom', 'fade']} bgImage={images.reactPic.replace('/', '')} bgDarken={0.75} notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
    <Text textColor="white">Container / Presentational / Functional </Text>
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
