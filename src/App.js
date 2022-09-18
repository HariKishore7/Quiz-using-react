import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
// import img from '../public/background_img'

function App() {
  return (
    <div className="row justify-content-center my-5">
      <div className="col col-sm-6 col-md-4 col-lg-3">
        {/* <div className="container-fluid rounded-pill"> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/start" element={<Quiz />}></Route>
              <Route path="/score" element={<Score />}></Route>
            </Routes>
          </BrowserRouter>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
