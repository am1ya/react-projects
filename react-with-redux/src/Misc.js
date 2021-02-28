{/*
function App({ posts }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps)(App);*/}


{/*
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#"><h1>Wisdatum</h1></Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">Add new </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/viewlist" className="nav-link" href="#">View list</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}*/}

{/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div style={{border: '1px solid black', backgroundColor: 'teal'}}>
        <ListComponent numbers={numbers}></ListComponent>
      </div>
      
    );
  }
}

export default App
*/}

{
  /*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';
import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Content submitted: ' + this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
            </button>
            </div>
          </form>
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(App)
*/
}