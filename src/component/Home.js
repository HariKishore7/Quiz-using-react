import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      <div className="col col-3">
        <div className="container-fluid bg-info bg-gradient">
          <div className="row justify-content-center my-5 pt-3">
            <div className="col col-4 ">
              <span className="h4">Upraised</span>
            </div>
          </div>

          <div className="row justify-content-center my-5">
            <div className="col col-4">
              <div className="btn btn-light btn-lg">
                <span className="badge rounded-pill bg-light text-dark">Quiz</span>
              </div>
            </div>
          </div>

          <div className="row justify-content-center my-5 pb-3">
            <div className="col col-4 ">
              <button className="btn btn-outline-danger" onClick={() => navigate("/start")}>Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
