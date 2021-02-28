import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import KeyPadComponent from "./KeyPadComponent";
import ResultComponent from "./ResultComponent";

class CalculatorModal extends Component {
  constructor(props) {
    super(props);

    this.hideModal = false;
    this.showCalculatorModal = false;

    this.state = {
      displayDialog: false,
      result: ""
    }
  }

  handleModalClose() {
    this.setState({ displayDialog: false });
    this.showCalculatorModal = this.state.displayDialog;
    this.hideModal = true;
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    if (!this.hideModal) {
      this.showCalculatorModal = this.props.showHide;
    }

    this.hideModal = false;

    return (
      <Modal show={this.showCalculatorModal}>
        <Modal.Header closeButton onClick={() => this.handleModalClose()}>
          <Modal.Title>Priya's Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="calculator-body">
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent onClick={this.onClick}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:'gold', color:'brown', fontWeight:'bold'}} onClick={() => this.handleModalClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CalculatorModal;