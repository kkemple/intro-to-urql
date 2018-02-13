// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import rEU from '../assets/react-europe.jpg'
import urqlBG from '../assets/urql.jpg'

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#e84393",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Welcome Back
          </Heading>
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            to GraphQL NYC 🕺🏻
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            ZX Ventures
          </Heading>
          <Heading size={4} caps lineHeight={1} textColor="secondary">
          Thanks for Hosting! 🙌
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" bgImage={rEU} />
        <Slide transition={["zoom"]} bgColor="primary" bgImage={urqlBG} bgDarken={0.5}>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Intro to Urql
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
