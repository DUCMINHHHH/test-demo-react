import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import TableUser from "./tableUser";
import { useState } from "react";

const ManageUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">MANAGE USER</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-warning"
            onClick={() => setshowModalCreateUser(true)}
          >
            <FaPlus /> Add New User
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
