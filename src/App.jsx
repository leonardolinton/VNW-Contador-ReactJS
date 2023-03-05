import React, { Component } from "react";
import { Container } from "./components/style/Container.style";
import Contador from "./components/Contador";

class App extends Component {
  render() {
    return (
      <Container>
        <Contador />
      </Container>
    );
  }
}

export default App;
