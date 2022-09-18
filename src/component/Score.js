import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Score() {
  const navigate = useNavigate();
  const [report, setReport] = useState({});
  useEffect(() => {
    console.log(
      axios
        .get(`http://localhost:3000/report`)
        .then((res) => setReport(res.data))
    );
  }, []);
  return (
    <div className="row justify-content-center my-5 pt-3">
      <div className="col">
        <h2>Result</h2>
        <div className="row">
          <span className="col">Correct</span>
          <span className="col">:</span>
          <span className="col">{report.correctAnswers}</span>
        </div>
        <div className="row">
          <span className="col">InCorrect</span>
          <span className="col">:</span>
          <span className="col">{report.inCorrectAnswers}</span>
        </div>
        <button onClick={() => navigate("/")}>Start Again</button>
      </div>
    </div>
  );
}

export default Score;
