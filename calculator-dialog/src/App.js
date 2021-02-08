import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import CalculatorModal from "./components/CalculatorModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.calculatorRef= React.createRef();
    this.state = {
      username: '',
      showHide: false
    };    
  }

  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.username + " has logged in!")
  }

  handleModalShow() {
    this.setState({ showHide: true })
  }

  render() {
    return (
      <div className="App">
        <div className="Header-div">
          <p><header className="App-header">Welcome to My Page</header></p>
        </div>
        <p></p>
        <div className="Main-div">
          <form onSubmit={this.mySubmitHandler}>
            <h1 className="Heading">User Login</h1>
            <p>
              <label>User Name</label>
              <input type="text" onChange={this.myChangeHandler}></input>
            </p>
            <p>
              <label>Password</label>
              <input type="passwordd"></input>
            </p>
            <input type="submit" class="Submit-button"></input>
          </form>
        </div>
        <p></p>
        <span className="block-example border border border-danger">
          <p>Hellow there!!</p>
          <Button variant="primary" onClick={() => this.handleModalShow()}>
            Launch demo modal
          </Button>
          <CalculatorModal showHide={this.state.showHide}></CalculatorModal>
        </span>
        <div className="Footer-div">
          <footer className="App-footer">
            Developed by Priya Nair
         </footer>
        </div>
      </div>
    );
  }
}

export default App;
