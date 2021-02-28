import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';
import { connect } from 'react-redux'
import AddPosts from './AddPosts';

class App extends Component {
  render() {
    return (
      <AddPosts></AddPosts>
    )
  }
}

export default App