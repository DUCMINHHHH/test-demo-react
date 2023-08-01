import "./ManageQuiz.scss";
import Select from "react-select";

const ManageQuiz = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Type, setType] = useState("EASY");
  const [image, setImage] = useState(null);

  handleOnchange(event) => {

  }

  return (
    <div className="quiz-container">
      <div className="title">Manage Quizzes</div>
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
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={Description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <label>Description</label>
          </div>

          <div className="my-3">
            <Select options={options} placeholder="Quiz types..." value={type} />
          </div>
          <div className="more-action form-group">
            <label className="mb-1"> Upload Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(event) => handleOnchange(event)}
            ></input>
          </div>
        </fieldset>
      </div>
      <div classNameName="list-detail">table</div>
    </div>
  );
};

export default ManageQuiz;
