import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Question from "./Question";
function Quiz() {
  const [data, setData] = useState({});

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([]);
  const [length, setLength] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [marks, setMarks] = useState(0);

  useLayoutEffect(() => {
    axios.get(`http://localhost:3000/questions`).then((res) => {
      setLength(res.data.length);
    });
  }, []);

  useEffect(() => {
    if (currentQuestion < length) {
      axios
        .get(`http://localhost:3000/questions/${currentQuestion}`)
        .then((res) => {
          setData(res.data);
        });
    }
  }, [currentQuestion]);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitting = () => {
    // setCurrentQuestion(1);
    setIsSubmitted(true);
    setMarks(score.filter((bool) => bool === true).length);
  };

  const selectedOption = (e) => {
    const option = Number(e.target.id);
    // console.log(option)
    // console.log(data.options);
    data.options.forEach((val) => {
      // console.log(val.id==option)
      if (val.id === option) {
        setScore((prev) => {
          const options = prev;
          options[data.id] = val.isCorrect;
          return options;
        });
      }
    });
    // console.log(score)
  };
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center ">
      <div className="col col-3">
        <div className="container-fluid bg-info bg-gradient">
          <div className="row justify-content-center my-5 pt-3">
            {!isSubmitted ? (
              <div className="col">
                <h2>
                  Question: {currentQuestion + 1} out of {length}
                </h2>
                <Question data={data} selectedOption={selectedOption} />
                {currentQuestion < length - 1 ? (
                  <button onClick={nextQuestion}>Next</button>
                ) : (
                  <button onClick={submitting}>Submit</button>
                )}
              </div>
            ) : (
              <div className="col">
                <h2>Result</h2>
                <div className="row">
                  <span className="col">Correct</span>
                  <span className="col">:</span> <span className="col">{marks}</span>
                </div>
                <div className="row">
                  <span className="col">InCorrect</span>
                  <span className="col">:</span> <span className="col">{length-marks}</span>
                </div>
                {/* <Link to='/start' className='link-primary  mt-2'> */}
                <button onClick={() => navigate("/")}>Start Again</button>
                {/* </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
