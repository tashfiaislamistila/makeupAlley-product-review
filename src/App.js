import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashbord/Dashboard';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/NotFound/NotFound';
import QuestionAnswer from './Component/QuestionAnswer/QuestionAnswer';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/question' element={<QuestionAnswer></QuestionAnswer>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
