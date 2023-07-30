import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";

const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  const location = useLocation();

  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    // console.log(res);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answers = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            answers.push(item.answers);
          });
          // console.log("value", value, "key", key);
          return { questionId: key, answers, questionDescription, image };
        })
        .value();
      console.log(data);
      setDataQuiz(data);
    }
  };

  const handlePrev = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) {
      setIndex(index + 1);
    }
  };

  const handleCheckbox = (answerId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionId === +questionId
    );
    if (question && question.answers) {
      question.answers = question.answers.map((item) => {
        if (+item.id === +answerId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
  };

  const handleFinishQuizz = () => {
    {
      "quizId": 1,
      "answers": [
          { 
              "questionId": 1,
              "userAnswerId": [3]
          },
          { 
              "questionId": 2,
              "userAnswerId": [6]
          }
      ]
  }
    console.log("data", dataQuiz);
    if (dataQuiz && dataQuiz.length > 0) {
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId} : {location?.state?.quizzTitle}
        </div>
        <hr />
        <div className="question-body">
          <img />
        </div>
        <div className="question-content">
          <Question
            index={index}
            handleCheckbox={handleCheckbox}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
          <div className="footer">
            <button className="btn btn-secondary" onClick={() => handlePrev()}>
              prev
            </button>
            <button className="btn btn-secondary" onClick={() => handleNext()}>
              next
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleFinishQuizz()}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
      <div className="right-content">count down</div>
    </div>
  );
};

export default DetailQuiz;
