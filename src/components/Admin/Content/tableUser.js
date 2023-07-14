const TableUser = (props) => {
  const { listUser } = props;

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
                    <button className="btn btn-danger">Detlete</button>
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
    </>
  );
};

export default TableUser;
