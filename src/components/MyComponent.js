import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "DM", age: "16" },
      { id: 2, name: "DMinh", age: "25" },
      { id: 3, name: "minh", age: "69" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
      </>
    );
  }
}

export default MyComponent;
