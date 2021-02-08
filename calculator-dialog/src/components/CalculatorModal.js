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
      displayDialog: false
    }
  }

  handleModalClose() {
    this.setState({ displayDialog: false });
    this.showCalculatorModal = this.state.displayDialog;
    this.hideModal = true;
  }

  render() {
    if (!this.hideModal) {
      this.showCalculatorModal = this.props.showHide;
    }

    this.hideModal = false;

    return (
      <Modal show={this.showCalculatorModal}>
        <Modal.Header closeButton onClick={() => this.handleModalClose()}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
           <div className="calculator-body">
            <ResultComponent />
            <KeyPadComponent />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleModalClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CalculatorModal;