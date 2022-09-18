import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'

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
    <div className="background">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>Result: {report.percentage}%</h3>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-6">
          <div className="py-2 bg-success p-2 m-2 text-dark">
            <span className="mx-2 fw-bold">{report.correctAnswers}</span>
            <span className="mx-2 text-white">Correct</span>
          </div>
          <div className="py-2 bg-danger p-2 m-2 text-dark border border-light">
            <span className="mx-2 fw-bold">{report.inCorrectAnswers}</span>
            <span className="mx-2 text-white">Incorrect</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-danger rounded-pill mb-2" onClick={() => navigate("/")}>
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Score;
