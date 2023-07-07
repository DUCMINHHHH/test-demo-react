import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   render() {
//     const { listUsers } = this.props;
//     console.log(listUsers);
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div> my name is {user.name} </div>
//                   <div> my age is {user.age} </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  // giống hàm phía trên
  // this.state = {
  //   isShowHideListUser: true;
  // }

  const handleShowHide = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHide()}>
          {isShowHideListUser === true ? "hide list user" : "show list user"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div> my name is {user.name} </div>
                <div> my age is {user.age} </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
