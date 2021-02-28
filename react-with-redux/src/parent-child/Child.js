import React from "react";
import Grandchild from "./GrandChild";
import './Style.css';

const Child = () => (
  <div className="child-component">
    <div>This is the child component</div>
    <Grandchild />
  </div>
);

export default Child;