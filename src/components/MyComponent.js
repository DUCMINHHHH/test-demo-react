import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myInfor = ["a", "b", "c"];
    return (
      <div>
        <UserInfo />
        <br></br>
        <DisplayInfor name={"DM"} age={30} MyInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
