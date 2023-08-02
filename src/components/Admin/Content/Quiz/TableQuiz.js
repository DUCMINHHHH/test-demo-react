import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";

const TableQuiz = () => {
  const [listQuiz, SetListQuiz] = useState([]);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    console.log("res", res);
    if (res && res.EC === 0) {
      SetListQuiz(res.DT);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

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
            listQuiz.map((item, index) => {
              return (
                <tr key={`list-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td>
                    <button className="btn btn-primary mx-3">edit</button>
                    <button className="btn btn-danger">delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableQuiz;
