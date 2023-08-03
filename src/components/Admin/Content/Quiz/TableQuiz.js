import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = () => {
  const [listQuiz, SetListQuiz] = useState([]);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUpdate, setDataUpdate] = useState();
  const [dataDelete, setDataDelete] = useState();

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    console.log("res", res.DT);
    if (res && res.EC === 0) {
      SetListQuiz(res.DT);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleClickBtnUpdate = (quiz) => {
    setIsShowModalUpdate(true);
    setDataUpdate(quiz);
  };

  const handleClickBtnDelete = (quiz) => {
    setIsShowModalDelete(true);
    setDataDelete(quiz);
  };

  return (
    <>
      <div>List Quizzes</div>
      <table className="table table-hover table-bordered mt-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.length > 0 &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`list-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() => handleClickBtnUpdate(item)}
                    >
                      edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalUpdateQuiz
        show={isShowModalUpdate}
        setShow={setIsShowModalUpdate}
        fetchQuiz={fetchQuiz}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
      <ModalDeleteQuiz
        show={isShowModalDelete}
        setShow={setIsShowModalDelete}
        fetchQuiz={fetchQuiz}
        dataDelete={dataDelete}
      />
    </>
  );
};

export default TableQuiz;
