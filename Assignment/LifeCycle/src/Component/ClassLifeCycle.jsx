import React from "react";

class ClassLifeCyclic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kimmi",
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps - props:", props);
    console.log("getDerivedStateFromProps - state:", state);
    return null; // Return null to indicate no state change
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate - nextProps:", nextProps);
    console.log("shouldComponentUpdate - nextState:", nextState);
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate - prevProps:", prevProps);
    console.log("componentDidUpdate - prevState:", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  update = () => {
    console.log("update method called");
    this.setState({ name: "kumari" });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={this.update}>button</button>
      </div>
    );
  }
}

export default ClassLifeCyclic;
