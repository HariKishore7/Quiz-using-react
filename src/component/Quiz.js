import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Question from "./Question";
function Quiz() {
  const [data, setData] = useState({});

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([]);
  const [length, setLength] = useState(1);
  const [hasSelected, setHasSelected] = useState(false);
  const [option, setOption] = useState();
  const [timeTaken, setTimeTaken] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/questions`).then((res) => {
      setLength(res.data.length);
    });
  }, [length]);

  useEffect(() => {
    if (currentQuestion < length) {
      axios
        .get(`http://localhost:3000/questions/${currentQuestion}`)
        .then((res) => {
          setData(res.data);
        });
    }
  }, [currentQuestion, length]);

  useEffect(() => {
    setTimeTaken(new Date());
  }, []);

  const nextQuestion = () => {
    if (hasSelected) {
      const time = new Date();
      const diff = time.getMilliseconds() - timeTaken.getMilliseconds();
      setTimeTaken(time);
      setData({});
      setCurrentQuestion(currentQuestion + 1);
      setHasSelected(false);
      axios
        .patch(`http://localhost:3000/questions/${currentQuestion}`, {
          selectedOption: option,
          timeTaken: diff,
        })
        .then(() => console.log("Submitted successfully"));
    } else {
      alert("Please select an option");
    }
  };

  const submitting = () => {
    if (hasSelected) {
      const marks = score.filter((bool) => bool === true).length;

      const percentage = (marks / length) * 100;
      setHasSelected(false);
      axios
        .post(`http://localhost:3000/report`, {
          correctAnswers: marks,
          inCorrectAnswers: length - marks,
          percentage: percentage,
        })
        .then(() => navigate("/score"));
    } else {
      alert("Please select an option");
    }
  };

  const selectedOption = (e) => {
    setHasSelected(true);
    const id = Number(e.target.id);
    setOption(id);
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
    <div className="row justify-content-center my-5 pt-3">
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
    </div>
  );
}

export default Quiz;
