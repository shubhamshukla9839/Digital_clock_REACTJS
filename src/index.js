import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />
  </>,
  rootElement
);

const fullname = ["vinod", "this"];
const biodata = [...fullname, "dob", "age"]; // spread operator

const intro = [...fullname, ...biodata];

var game = ["pokymon", "powerranger", "dj", "ninja"];
var [first, ...last] = game;
console.log(last);

console.log(biodata);

const full = {
  fname: "shubam",
  lname: "shukal"
};

const biodataobject = {
  id: 1,
  ...full
};
console.log(biodataobject);
