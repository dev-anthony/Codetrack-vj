import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing/page';
import Login from './auth/login';
import Signup from './auth/signup';
import ForgetPassword from './auth/forgetpassword';
import Profile from './profile/profile';
import SubmitProject from './submitproject/submit';
import Leaderboard from './leaderboard/leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/submitproject" element={<SubmitProject/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
      </Routes>
     
    </Router>
  );
}

export default App;