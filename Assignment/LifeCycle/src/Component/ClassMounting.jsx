import React from "react";
class ClassMounting extends React.PureComponent {
  constructor({ data }) {
    let [userName, userAge] = data;
    super({ data });
    this.state = {
      favoritecolor: "red",
    };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return { props, state };
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    let x = "render method is called";

    return (
      <>
        <h1>The color of favoritecolor is {this.state.favoritecolor}</h1>
        <h1>The name of userName is {this.state.userName}</h1>
        <h1>The of of userName is {this.state.userAge}</h1>
        <h1>{console.log(x)}</h1>
      </>
    );
  }
}

export default ClassMounting;
