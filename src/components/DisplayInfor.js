import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleHideShow = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span onClick={() => this.handleHideShow()}>
            {this.state.isShowListUser === true
              ? "hide list users"
              : "show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div> my name is {user.name} </div>
                  <div> my age is {user.age} </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
