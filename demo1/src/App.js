import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import CalculatorModal from './Calcuator/CalculatorModal';


class App extends Component {
  constructor(props) {
    super(props);
    this.calculatorRef = React.createRef();
    this.state = {
      username: '',
      password: '',
      loginSuccess: false,
      showHide: false,
      result: ""
    }
  }

  userNameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  passwordChangeHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.username != 'priya') {
      this.setState({ loginSuccess: false });
      alert("Incorrect User Name!");
    }
    if (this.state.password != 'pns') {
      this.setState({ loginSuccess: false });
      alert("Incorrect Password!")
    }
    else if(this.state.username == 'priya' && this.state.password == 'pns') {
      this.setState({ loginSuccess: true });
      alert(this.state.username + " has logged in!");
    }
  }

  handleModalShow() {
    this.setState({ showHide: true })
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
              <input type="text" onChange={this.userNameChangeHandler}></input>
            </p>
            <p>
              <label>Password</label>
              <input type="password" onChange={this.passwordChangeHandler}></input>
            </p>
            <input type="submit" class="Submit-button"></input>
          </form>
        </div>
        <p></p>
        {
          this.state.loginSuccess ?
            <span className="block-example border border border-danger">
              <p>Hellow there!!</p>
              <Button variant="primary" onClick={() => this.handleModalShow()}>
                Launch demo modal
          </Button>
              <CalculatorModal showHide={this.state.showHide}></CalculatorModal>
            </span> : null
        }
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
