import React from "react";

import { 
  Appear, BlockQuote, Cite, 
  CodePane, Deck, Fill, Heading, 
  Image, Layout, Link, ListItem, 
  List, Markdown, Quote, Slide,
  Spectacle, Text
} from "spectacle";

const images = {
  city: require('../../assets/images/city.jpg')
};

const GraphQLSlides = [
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
  </Slide>,
  <Slide transition={["slide"]} bgColor="black">
    <Heading size={1} textColor="primary" textFont="primary">
        Getting Started...
    </Heading>
    <List textColor="white">
      <ListItem>A GraphQL Schema: A description of your data model with an associated set of resolve methods that know how to fetch any data your application could ever need.</ListItem>
      <ListItem>A GraphQL Server: Any server can be taught to load a schema and speak GraphQL</ListItem>
      <ListItem>Relay: Relay speaks to GraphQL servers through a network layer. The network layer that ships with Relay is compatible with express-graphql out of the box, and will continue to evolve as we add new features to the transport.</ListItem>
    </List>
  </Slide>,
  <Slide transition={["slide"]} bgColor="black">
    <Text textColor="white">GrahpQL Example </Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require("raw!../../assets/code/graphQL.example")}
          margin="20px 1px"
        />
      </Fill>
    </Layout> 
  </Slide>,
  <Slide>
    <Heading size={4} caps textColor="primary" bgColor="black" margin={10}>Pagination & Connections & Edges</Heading>
    <div>
      More powerful and flexible than simple lists.
      Support pagination (forward and back), with cursors.
      Fine-grained mutation support (eg. RANGE_ADD, RANGE_DELETE, NODE_DELETE, as described in the guide).
      Requires a first or last argument in order to limit the size of the result set.
      Has an edges field that provides a place to locate per-edge, edge-specific data.
      A heavier-weight concept, requiring more work to define in the schema.
      Lists
      Simple and lightweight.
      No support for pagination (the entire list is always returned).
      No special mutations features for prepending, appending etc (although it is a requested feature).
      Which to use?
      Whenever you need pagination, you should use a connection.
      If you need fine-grained control over mutations, you may choose to use a connection, even if you don't need pagination.
      If you want all the items in a connection, you can use first with some large number.
      If you want to expose a short list with minimal effort, use a simple list.
    </div>
  </Slide>
];

export default GraphQLSlides;
