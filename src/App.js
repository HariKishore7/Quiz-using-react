import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

function App() {
  return (
    <div className="row justify-content-center my-5">
      <div className="col col-sm-6 col-md-4 col-lg-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/question" element={<Quiz />}></Route>
            <Route path="/score" element={<Score />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
