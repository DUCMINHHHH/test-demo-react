import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div classNameName="mange-user-container">
      <div classNameName="title">MANGE USER</div>
      <div classNameName="user-content">
        <div>
          <button>click me</button>
        </div>
        <div>
          table
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
