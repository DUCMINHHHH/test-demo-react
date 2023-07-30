import _ from "lodash";

const Question = (props) => {
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleHandleCheckbox = (event, answerId, questionId) => {
    props.handleCheckbox(answerId, questionId);
  };

  return (
    <>
      {data.image ? (
        <div className="question-image">
          <img src={`data:image/jpeg;base64,${data.image}`} />
        </div>
      ) : (
        <div className="question-image"></div>
      )}

      <div className="question">
        question {index + 1}: {data.questionDescription}
      </div>
      <div className="answer">
        {data.answers &&
          data.answers.length > 0 &&
          data.answers.map((answer, index) => {
            return (
              <div key={`answer-${index}`} className="answer-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={answer.isSelected}
                    onChange={(event) =>
                      handleHandleCheckbox(event, answer.id, data.questionId)
                    }
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    {answer.description}
                  </label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
