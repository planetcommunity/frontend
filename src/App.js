import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import {Login,  Register, NotFoundPage} from './components'
import CodeVerification from './components/registrationComponent/CodeVerification'
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
          <Route path="/code-verification" element={<CodeVerification/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
