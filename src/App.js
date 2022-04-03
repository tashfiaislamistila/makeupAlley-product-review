import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashbord/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import QuestionAnswer from './Component/QuestionAnswer/QuestionAnswer';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/question' element={<QuestionAnswer></QuestionAnswer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
