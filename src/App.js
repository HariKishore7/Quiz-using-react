import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home';
import Quiz from './component/Quiz';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/start' element={<Quiz />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
