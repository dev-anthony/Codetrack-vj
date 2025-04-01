import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing/page';
import Login from './auth/login';
import Signup from './auth/signup';
import ForgetPassword from './auth/forgetpassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
      </Routes>
     
    </Router>
  );
}

export default App;