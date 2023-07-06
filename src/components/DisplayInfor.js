import React from "react";

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
      <div>
        <div>
          <span onClick={() => this.handleHideShow()}>
            {this.state.isShowListUser === true
              ? "hide list users"
              : "show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div> my name is {user.name} </div>
                  <div> my age is {user.age} </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
