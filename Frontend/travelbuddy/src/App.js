import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';
import LoginPage from './component/Login';
import Registeruser from './component/Registeruser';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
     <header className="App-header">
          
        <Router>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/Registeruser" element={<Registeruser />} />
          
        </Routes>
        
      </Router>
        
      </header>
    </div>
  );
}

export default App;
