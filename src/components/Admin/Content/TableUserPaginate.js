import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const TableUserPaginate = (props) => {
  const { listUser, pageCount } = props;

  const handlePageClick = (event) => {
    props.fetchListUserWithPaginate(+event.selected + 1);
    console.log(`User requested page number ${event.selected}, `);
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td scope="row"> {item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      onClick={() => props.handleClickBtnView(item)}
                      className="btn btn-secondary"
                    >
                      View
                    </button>
                    <button
                      onClick={() => props.handleClickBtnUpdate(item)}
                      className="btn btn-primary mx-3"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => props.handleClickBtnDelete(item)}
                      className="btn btn-danger"
                    >
                      Detlete
                    </button>
                  </td>
                </tr>
              );
            })}

          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not Found Data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="user-pagination d-flex justify-content-center">
        <ReactPaginate
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< Prev"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
