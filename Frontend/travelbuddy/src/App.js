import logo from './logo.svg';
import './App.css';
import LoginPage from './component/Login';
import Registeruser from './component/Registeruser';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <header className="App-header">
         
        
        
        <Router>
        <Routes>
        <Route path="" element={<LoginPage />} />
          <Route path="/Registeruser" element={<Registeruser />} />
          
        </Routes>
        
      </Router>
        
        
        
        

      </header>
    </div>
  );
}

export default App;
