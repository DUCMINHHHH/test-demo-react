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

  handleOnchange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnsubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        my name is {this.state.name} iam {this.state.age}
        <form onSubmit={(event) => this.handleOnsubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnchange(event)} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
