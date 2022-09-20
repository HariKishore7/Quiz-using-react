import React, { useEffect, useState } from "react";

import jsondata from "../questions.json";
import Score from "./Score";
import "./Style.css";

import Question from "./Question";

function Quiz() {
  const [data, setData] = useState({});

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([]);
  const [length, setLength] = useState(1);
  const [hasSelected, setHasSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [report, setReport] = useState({});

  useEffect(() => {
    setLength(jsondata.questions.length);
  }, [length]);

  useEffect(() => {
    console.log(currentQuestion, length);

    if (currentQuestion < length) {
      setData(jsondata.questions[currentQuestion]);
    }
  }, [currentQuestion, length]);

  const nextQuestion = () => {
    if (hasSelected) {
      setData({});
      setCurrentQuestion(currentQuestion + 1);
      setHasSelected(false);
    } else {
      alert("Please select an option");
    }
  };

  const submitting = () => {
    if (hasSelected) {
      const marks = score.filter((bool) => bool === true).length;

      const percentage = (marks / length) * 100;
      setHasSelected(false);
      setIsSubmitted(true);
      setReport({
        correctAnswers: marks,
        inCorrectAnswers: length - marks,
        percentage: percentage,
      });
    } else {
      alert("Please select an option");
    }
  };

  const selectedOption = (e) => {
    setHasSelected(true);
    const id = Number(e.target.id);
    data.options.forEach((val) => {
      if (val.id === id) {
        setScore((prev) => {
          const options = prev;
          options[data.id] = val.isCorrect;
          return options;
        });
      }
    });
  };
  return (
    <div className="background">
      {isSubmitted ? (
        <Score report={report} />
      ) : (
        <>
          <div className="row justify-content-center">
            <div className="col">
              <h2>
                Question: {currentQuestion + 1}/{length}
              </h2>
              <Question data={data} selectedOption={selectedOption} />
            </div>
          </div>
          <div className="row my-2 justify-content-center">
            <div className="d-grid gap-2 col-6 mx-auto">
              {currentQuestion < length - 1 ? (
                <button
                  className="btn btn-danger rounded-pill fw-bold"
                  onClick={nextQuestion}
                >
                  Next <span className="ms-5 fw-bold">→</span>
                </button>
              ) : (
                <button
                  className="btn btn-danger rounded-pill mb-2"
                  onClick={submitting}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
