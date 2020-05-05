import React, { Component } from "react";

const li = [
  {
    name: "question",
    value: "Click on button to start the Game",
  },
  {
    name: "question",
    value: "Guess a number between 1 to 10",
  },
  {
    name: "question",
    value: "Multiply it by 9",
  },
  {
    name: "question",
    value: "Sum the digits, if it is a two digit number. (Eg 1+2 = 3)",
  },
  {
    name: "question",
    value: "Subtract 5 from the number u got",
  },
  {
    name: "question",
    value:
      "Convert the number into alphabets. Eg if number = 1 -> A, 2 -> B, 3 -> C, 4 -> D",
  },
  {
    name: "question",
    value:
      "Guess a country name, starting with the alphabet you got. Eg I -> India",
  },
  {
    name: "question",
    value:
      "Guess a animal name starting with the last alphabet of the country ",
  },
  {
    name: "question",
    value: "Guess a fruit name starting with the last alphabet of the animal ",
  },
  {
    name: "answer",
    value: " Was it a Orange Kangarooo in Denmark?  ",
  },
];

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return;
    <div>
      <h1>Hello World</h1>
    </div>;
  }
}

export default HelloWorld;
