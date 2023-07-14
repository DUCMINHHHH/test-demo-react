import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState({});

  const [listUser, setListUser] = useState([]);
  // component didmount
  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    let res = await getAllUsers();
    console.log(res);
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setshowModalUpdateUser(true);
    setdataUpdate(user);
  };

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
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListUser={fetchListUser}
        />

        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
