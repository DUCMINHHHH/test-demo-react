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

  handleDeleteUser = (userId) => {
    let listUsersclone = [...this.state.listUsers];
    listUsersclone = listUsersclone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersclone,
    });
  };

  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br></br>
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default MyComponent;
