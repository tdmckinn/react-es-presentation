import React from "react";

import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const thankyouListTextSize = '26px';

const ConclusionSlides = [
  <Slide transition={["spin", "slide"]} bgColor="primary">
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
  </Slide>
];

export default ConclusionSlides;
