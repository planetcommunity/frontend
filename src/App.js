import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';






import {Login,  Register, Load } from './components'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Load/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
