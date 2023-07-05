import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "minh",
    address: "hcm",
    age: 21,
  };

  render() {
    return <div>my name is {this.state.name}</div>;
  }
}

export default MyComponent;
