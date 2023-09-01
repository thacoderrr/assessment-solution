import './App.css';
import Mylogin from './components/login';
import Mydashboard from './components/dashboard';
import { Routes, Route, Link } from "react-router-dom";
import Transactiondetails from './components/transactionDetails';


function App() {
  return (
    <div className="App">
      {/* <Mylogin /> */}
      <nav>
      <Link to="/">Login</Link>
          <Link to="/dashboard">My Dashboard</Link>
          <Link to="/transactiondetails">Transaction Details</Link>
        </nav>
        <Routes> 
        <Route path="/" element={<Mylogin />} />           
            <Route path="/dashboard" element={<Mydashboard/>} />
            <Route path="/transactiondetails" element={<Transactiondetails/>} />
        </Routes>
      
    </div>
  );
}

export default App;
