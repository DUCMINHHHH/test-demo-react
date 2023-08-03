import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPlusSquareFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectQuiz, setSelectQuiz] = useState({});
  return (
    <div className="questions-container">
      <div className="title">Mange Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz:</label>
          <Select
            defaultValue={selectQuiz}
            onChange={setSelectQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add question:</div>
        <div className="questions-content">
          <div className="form-floating description">
            <input
              type="text"
              class="form-control"
              placeholder="name@example.com"
            />
            <label>Description</label>
          </div>
          <div className="group-upload">
            <label className="label-upload">Upload Image</label>
            <input type="file" hidden />
            <span>0 file is upload</span>
          </div>
          <div className="btn-add">
            <span className="icon-add">
              <BsFillPlusSquareFill />
            </span>
            <span className="icon-remove">
              <BsFillTrashFill />
            </span>
          </div>
        </div>
        <div className="answers-content">
          <input className="form-check-input isCorrect" type="checkbox" />
          <div className="form-floating answer-name">
            <input
              type="text"
              class="form-control"
              placeholder="name@example.com"
            />
            <label>Answer 1</label>
          </div>
          <div className="btn-group">
            <span className="icon-add">
              <AiFillPlusCircle />
            </span>
            <span className="icon-remove">
              <AiFillMinusCircle />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
