import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "DM", age: "16" },
      { id: 2, name: "DMinh", age: "25" },
      { id: 3, name: "minh", age: "69" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
