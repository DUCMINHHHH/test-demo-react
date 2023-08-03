import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import TableUser from "./tableUser";
import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const limitUser = 3;
  const [pageCount, setpageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalViewUser, setshowModalViewUser] = useState(false);

  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState({});

  const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
  const [dataDelete, setdataDelete] = useState({});

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

  useEffect(() => {
    fetchListUserWithPaginate(1);
  }, []);

  const fetchListUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, limitUser);
    console.log(res);
    if (res.EC === 0) {
      setListUser(res.DT.users);
      setpageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setshowModalUpdateUser(true);
    setdataUpdate(user);
  };

  const reSetDataUpdate = () => {
    setdataUpdate({});
  };

  const handleClickBtnView = (user) => {
    setshowModalViewUser(true);
    setdataUpdate(user);
  };

  const handleClickBtnDelete = (user) => {
    setshowModalDeleteUser(true);
    setdataDelete(user);
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
          <TableUserPaginate
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUser={fetchListUser}
          reSetDataUpdate={reSetDataUpdate}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalViewUser
          show={showModalViewUser}
          setShow={setshowModalViewUser}
          dataUpdate={dataUpdate}
          reSetDataUpdate={reSetDataUpdate}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUser={fetchListUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
