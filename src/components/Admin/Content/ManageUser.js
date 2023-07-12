import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div classNameName="mange-user-container">
      <div classNameName="title">MANGE USER</div>
      <div classNameName="user-content">
        <div>
          <button>click me</button>
        </div>
        <div>table</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
