import { Component } from "react";
import {
  Box,
  Display,
  Buttons,
  Button,
  ResetButton,
} from "../style/Contador.style";

class Contador extends Component {
  state = {
    numero: 0,
  };

  Add = () => {
    this.setState({
      numero: this.state.numero < 10 ? this.state.numero + 1 : 10,
    });
  };
  Rmv = () => {
    this.setState({
      numero: this.state.numero > 0 ? this.state.numero - 1 : 0,
    });
  };

  Cls = () => {
    this.setState({
      numero: 0,
    });
  };

  render() {
    return (
      <Box>
        <Display>
          <h1>{this.state.numero}</h1>
        </Display>
        <Buttons>
          <Button onClick={this.Add}>+</Button>
          <Button onClick={this.Rmv}>-</Button>
        </Buttons>
        <ResetButton onClick={this.Cls}>RESET</ResetButton>
      </Box>
    );
  }
}

export default Contador;
