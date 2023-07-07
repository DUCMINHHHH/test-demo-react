import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "minh",
//     address: "hcm",
//     age: 21,
//   };

//   handleOnchangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnchangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnsubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         my name is {this.state.name} iam {this.state.age}
//         <form onSubmit={(event) => this.handleOnsubmit(event)}>
//           <label>your name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => this.handleOnchangeInput(event)}
//           />

//           <label>your age</label>
//           <input
//             type="text"
//             value={this.state.age}
//             onChange={(event) => this.handleOnchangeAge(event)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("hcm");
  const [age, setAge] = useState("");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      my name is {name} iam {age}
      <form onSubmit={(event) => handleOnsubmit(event)}>
        <label>your name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <label>your age</label>
        <input
          type="text"
          value={age}
          onChange={(event) => handleOnchangeAge(event)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
