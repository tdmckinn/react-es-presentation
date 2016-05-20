
import React from 'react';

import {
  CodePane, Fill, Heading,
  Layout, ListItem, Text,
  List, Slide, Markdown
} from 'spectacle';

const images = {
  city: require('../../assets/images/city.jpg'),
  graphQL: require('../../assets/images/graphql.svg'),
  graphQLOverview: require('../../assets/images/graphqlchart.png'),
  rest_graphql: require('../../assets/images/rest_graphql.png'),

};
const lightPurple = '#e535ab';
const styleLightPurple = { color: lightPurple };

const GraphQLSlides = [
  <Slide
    transition={['zoom', 'fade']}
    bgImage={images.graphQL}
    bgColor="black"
    bgDarken={0.75}
    bgSize="contain"
    bgRepeat="no-repeat"
    notes="<ul><li>talk about that</li><li>and that</li></ul>"
  >
    <Heading size={1} caps textColor={lightPurple} textFont="primary">
      GraphQL
    </Heading>
    <Text textColor="#fff">A DATA QUERY LANGUAGE AND RUNTIME </Text>
  </Slide>,
  <Slide transition={['zoom', 'fade']} bgImage={images.city.replace('/', '')} bgDarken={0.85}>
    <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
      What is GraphQL? Single API endpoint data retrieval
    </Heading>
    <Layout>
      <Fill>
        <Text textColor="white">
          GraphQL is a query language created by Facebook in 2012
          which provides a common interface between the client and the server for data
          fetching and manipulations.
        </Text>
      </Fill>
      <Fill>
        <Text textColor="white">Key concepts of the GraphQL query language are:</Text>
        <List textColor="white">
          <ListItem> Hierarchical </ListItem>
          <ListItem> Product‐centric </ListItem>
          <ListItem> Strong‐typing </ListItem>
          <ListItem> Client‐specified queries </ListItem>
          <ListItem> Introspective </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black" >
    <Heading size={4} textColor="tertiary">
      GraphQL Overview
    </Heading>
    <img src={images.graphQLOverview.replace('/', '') } style={{ maxWidth: 800 }} />
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Heading size={3} textColor={lightPurple} textFont="primary">
      Getting Started...
    </Heading>
    <List textColor="white">
      <ListItem textSize="1.9rem">
        <span style={styleLightPurple}> A GraphQL Schema: </span> A description of your data model with an associated set of resolve
        methods that know how to fetch any data your application could ever need.
      </ListItem>
      <ListItem textSize="1.9rem">
         <span style={styleLightPurple}> A GraphQL Server: </span> Any server can be taught to load a schema and speak GraphQL
      </ListItem>
      <ListItem textSize="1.9rem">
       <span style={styleLightPurple}> Relay: </span> Relay speaks to GraphQL servers through a network layer.
        The network layer that ships with Relay is compatible with express-graphql out of the box,
        and will continue to evolve as we add new features to the transport.
      </ListItem>
      <ListItem textSize="1.9rem">
       <span style={styleLightPurple}> Apollo Client: </span> Alternative developed by MeteorJS team that allows
       for use with Redux integration that speaks to GraphQL backend.
      </ListItem>
    </List>
  </Slide>,
  <Slide transition={['slide']} bgColor="black">
    <Text textColor="white">GrahpQL Example </Text>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/graphQLRequest.example')}
          margin="20px 1px"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/graphQLResponse.example')}
          margin="20px 1px"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black" >
    <Heading textColor={lightPurple} size={3} textFont="primary">
      Why GrahpQL and What Problems are being solved ?
    </Heading>
    <Text textColor="white"> Round Trips </Text>
  </Slide>,
  <Slide bgColor="black" textFont="primary">
    <Heading textColor={lightPurple}> What's the learning curve ? </Heading>
     <Text textColor="white"> Easy to Hard </Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading size={4} caps textColor="black"
      bgColor="white"
    > Lets look at the API...</Heading>
    <Text> GraphQL's Type system </Text>
     <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/graphQLInterface.example')}
          margin="20px 1px"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={require('raw!../../assets/code/graphQLTypes.example')}
          margin="20px 9px"
        />
    </Fill>
    </Layout>
  </Slide>,
  <Slide transition={['zoom']} bgColor="black" >
    <Heading size={4} textColor="tertiary">
      GraphQL vs REST
    </Heading>
    <img src={images.rest_graphql.replace('/', '') } style={{ maxWidth: 800, maxHeight: 545 }} />
  </Slide>,
  <Slide bgColor="black" textFont="primary">
    <Heading textColor={lightPurple}> Quick spill on List </Heading>
    <Text textColor="white"> One of the most important things we deal with as developers day to day.</Text>
  </Slide>,
  <Slide bgColor="black" textColor={lightPurple}>
    <Heading> Pagination </Heading>
      <Layout>
        <Fill>
          <Text> Different Types of pagination</Text>
          <List>
            <ListItem> Inifite Scroll </ListItem>
            <ListItem> Sequential Pages </ListItem>
            <ListItem> Numbered Pages </ListItem>
          </List>
        </Fill>
        <Fill>
          <Text> What is it for ?</Text>
          <List>
            <ListItem> Performance Concerns </ListItem>
            <ListItem> UX Concerns </ListItem>
          </List>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="black">
    <Heading size={4}
      caps
      bgColor="white"
      textColor={lightPurple}
      margin={10}
    > Pagination & Connections & Edges</Heading>
    <Text textColor="white">
      More powerful and flexible than simple lists.
      Support pagination (forward and back), with cursors.
      Fine-grained mutation support (eg. RANGE_ADD, RANGE_DELETE, NODE_DELETE, as described in the guide).
      Requires a first or last argument in order to limit the size of the result set.
      Has an edges field that provides a place to locate per-edge, edge-specific data.
      A heavier-weight concept, requiring more work to define in the schema.
      Lists
      Simple and lightweight.
      No support for pagination (the entire list is always returned).
      No special mutations features for prepending, appending etc
      (although it is a requested feature).
    </Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading
      size={4}
      caps
      textColor={lightPurple}
      bgColor="black"
      margin={10}
    > Pagination & Connections & Edges Cont...</Heading>
    <Text textColor="white">
      Which to use?
      Whenever you need pagination, you should use a connection.
      If you need fine-grained control over mutations, you may choose to use a connection,
      even if you don't need pagination.
      If you want all the items in a connection, you can use first with some large number.
      If you want to expose a short list with minimal effort, use a simple list.
    </Text>
  </Slide>,
  <Slide bgColor="black">
    <Heading textColor="white" size={4}> Cursor Specification Key terms </Heading>
     <Markdown>
      {`
        * A **connection** is a paginated field on an object — for example, the friends field on a user or the comments field on a blog post.</li>
        * An **edge** has metadata about one object in the paginated list, and includes a cursor to allow pagination starting from that object..</li>
        * A **node** represents the actual object you were looking for
        * **pageInfo** lets the client know if there are more pages of data to fetch. In the Relay specification, it doesn’t tell you the total number of items, because the client cache doesn’t need that info. It would be up to the developer to expose that information through another field.

        -  [Apollo stack](https://medium.com/apollo-stack/understanding-pagination-rest-graphql-and-relay-b10f835549e7#.97kypxjtm)
              `}
      </Markdown>
  </Slide>,
  <Slide bgColor={lightPurple}>
    <Heading> Show the Tools! </Heading>
  </Slide>
];

export default GraphQLSlides;
