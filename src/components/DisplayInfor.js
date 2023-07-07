import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      // hàm thay tên title
      document.title = "minhDM";
    }, 3000);
  };

  componentDidUpdate = (prevProps, prevState, Snapshot) => {
    console.log("call me component", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("me");
      }
    }
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
        {/* <img src={logo} /> */}
        <div>
          <span onClick={() => this.handleHideShow()}>
            {/* điều kiện để showhide */}
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
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisplayInfor;
