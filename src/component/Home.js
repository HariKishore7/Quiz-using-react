import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className=" row justify-content-center">
        <div className="col-6">
          <img
            alt="upraised"
            src="https://global-uploads.webflow.com/5da0478a951135b39339e016/603e29b9802caa2681c9be0f_Upraised%20Logo.svg"
          />
          <span className="text-dark fw-bold fs-3 mx-1 my-2"> Upraised</span>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col col-4 bg-light rounded-circle text-center">
          <div className="fs-3 my-5 fw-bold text-danger">Quiz</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-danger rounded-pill mb-2"
            onClick={() => navigate("/quiz")}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
