import "./ManageQuiz.scss";
import Select from "react-select";
import { useState } from "react";
import { postCreateNewQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";

const ManageQuiz = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Type, setType] = useState("EASY");
  const [Image, setImage] = useState(null);

  const handleOnchange = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!Name || !Description) {
      toast.error("name/description is required");
      return;
    }

    let res = await postCreateNewQuiz(Description, Name, Type?.value, Image);
    console.log("check", res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName(" ");
      setDescription(" ");
      setType("EASY");
      setImage(null);
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <hr />
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={Name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={Description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>

                <div className="my-3">
                  <Select
                    options={options}
                    placeholder="Quiz types..."
                    defaultValue={Type}
                    onChange={setType}
                  />
                </div>
                <div className="more-action form-group">
                  <label className="mb-1"> Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(event) => handleOnchange(event)}
                  ></input>
                </div>
                <button
                  className="btn btn-warning mt-4"
                  onClick={() => handleSubmitQuiz()}
                >
                  Save
                </button>
              </fieldset>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="list-detail">
        <TableQuiz />
      </div>
    </div>
  );
};

export default ManageQuiz;
