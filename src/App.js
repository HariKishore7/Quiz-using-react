import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

function App() {
  return (
    <div className="row justify-content-center ">
      <div className="col col-3">
        <div className="container-fluid bg-info bg-gradient">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/start" element={<Quiz />}></Route>
              <Route path="/score" element={<Score />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
