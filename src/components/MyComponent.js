import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "DM", age: "16" },
//       { id: 2, name: "DMinh", age: "25" },
//       { id: 3, name: "minh", age: "69" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersclone = [...this.state.listUsers];
//     listUsersclone = listUsersclone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersclone,
//     });
//   };

//   render() {
//     return (
//       <>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br></br>
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setlistUsers] = useState([
    { id: 1, name: "DM", age: "16" },
    { id: 2, name: "DMinh", age: "25" },
    { id: 3, name: "minh", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setlistUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersclone = [...listUsers];
    listUsersclone = listUsersclone.filter((item) => item.id !== userId);
    setlistUsers(listUsersclone);
  };

  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br></br>
      <DisplayInfor listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
