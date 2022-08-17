import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/pages/dashboard';
import ForgetPassword from './components/pages/forgetpassword'
import ResetPassword from './components/pages/resetpassword'
import Login from './components/pages/login'
import Registration from './components/pages/registration'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
