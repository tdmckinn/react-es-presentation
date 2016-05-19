import React from 'react';

import {
  Fill, Heading, Text,
  Layout, Link, ListItem,
  List, Slide
} from 'spectacle';

const thankyouListTextSize = '26px';

const ConclusionSlides = [
  <Slide transition={['zoom']} bgColor="black">
    <Heading size={1} caps fit textColor="tertiary">
      Honoroable Mentions...
    </Heading>
    <List textColor="white">
      <ListItem> React Native </ListItem>
      <ListItem> Flow </ListItem>
      <ListItem> Typescript </ListItem>
      <ListItem> Faclorjs By Netflix </ListItem>
      <ListItem> Apollo Stack by the Meteorjs team </ListItem>
    </List>
  </Slide>,
  <Slide transition={['spin', 'slide']} bgColor="primary">
    <Heading size={1} caps lineHeight={1} textColor="white">
      Thank You
    </Heading>
    <Layout>
      <Fill>
      <Text> Me: </Text>
        <List>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/tdmckinn/jurastic-waves">Jurrasic Waves</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/tdmckinn">Github: @tdmckinn</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://twitter.com/TirellMckinnon">Twitter: @TirellMckinnon</Link></ListItem>
        </List>
      </Fill>
      <Fill>
        <Text>Resources =></Text>
        <List>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://facebook.github.io/react/">Reactjs</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://facebook.github.io/relay/">Relay</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="http://graphql.org/">GraphQL</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="http://flowtype.org/">Redux</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/FormidableLabs/spectacle">Spectacle Presentation Library</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://stackoverflow.com/research/developer-survey-2016">Stackoverflow Devloper Survey</Link></ListItem>
        </List>
      </Fill>
        <Fill>
        <Text>Resources Cont..</Text>
        <List>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/reactjs">React Community aka (rackt)</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/enaqx/awesome-react">Awseome React</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://github.com/chentsulin/awesome-graphql">Awseome GraphQL</Link></ListItem>
          <ListItem textSize={thankyouListTextSize}>
            <Link href="https://app.moqups.com">Moqups</Link></ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['spin', 'slide']} bgColor="black">
    <Heading> Questions ??? </Heading>
  </Slide>
];

export default ConclusionSlides;
