import React from "react";

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kimmi",
    };
    console.log("Inside child Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Inside child getDerivedStateFromProps");
    return null;
  }
  componentDidMount(){
    console.log("Inside child componentDidMount")
  }

  render() {
    return (
      <div>
        <h2>ClassLifeCycle</h2>
        <button
          onClick={() => this.setState({ email: "kumarisinha@gamil.com" })}
        >
          {" "}
          button
        </button>
      </div>
    );
  }
}

export default ClassLifeCycle;
