import React, { Component } from 'react';
import { connect } from "react-redux";
import Child from "./Child";
import './Style.css';

class Parent extends Component{
    increment = () => {
        this.props.dispatch({ type: "INCREMENT" });
      };
    render(){
        return(
            <div className="parent-component">
            <div>This is the parent component</div>
            <button onClick={this.increment}>Click Me!!</button>
            <Child />
          </div>
        );
    }
}

export default connect(null)(Parent);