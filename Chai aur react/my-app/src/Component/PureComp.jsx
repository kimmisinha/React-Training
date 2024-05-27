import React from "react";
import Counter from "./Counter";
// import { PureComponent } from "react";
class PureComp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <Counter count={this.state.count} />
        <button
          //   onClick={()=>{this.setState({count:this.state.count+1})}}
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default PureComp;
/*
By using PureComponent, you are telling React that your component 
complies with this requirement, so React doesn’t need to re-render as 
long as its props and state haven’t changed. However, your component will 
still re-render if a context that it’s using changes.

*/
