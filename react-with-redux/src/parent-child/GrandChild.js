import React from "react";
import { connect } from "react-redux";
import './Style.css';

const GrandChild = props => (
  <div className="grandchild-component">
    <div>This is the grandchild component</div>
    <div class="emp">Count: {props.count}</div>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(GrandChild);