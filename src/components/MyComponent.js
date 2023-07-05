import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "minh",
    address: "hcm",
    age: 21,
  };

  handleClick(event) {
    console.log("my name is", this.state.name, " iam", this.state.age);

    this.setState({
      name: "dm",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleMouseOver(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        my name is {this.state.name} iam {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button
          onMouseOver={(event) => {
            this.handleMouseOver(event);
          }}
        >
          hover me
        </button>
      </div>
    );
  }
}

export default MyComponent;
