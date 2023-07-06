import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "minh",
    address: "hcm",
    age: 21,
  };

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnchangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnsubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        my name is {this.state.name} iam {this.state.age}
        <form onSubmit={(event) => this.handleOnsubmit(event)}>
          <label>your name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnchangeInput(event)}
          />

          <label>your age</label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleOnchangeAge(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
