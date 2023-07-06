import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { name, age } = this.props;
    return (
      <div>
        <div>my name is {name}</div>
        <div>my age is {age}</div>
        <div>{this.props.myInfor}</div>
      </div>
    );
  }
}

export default DisplayInfor;
