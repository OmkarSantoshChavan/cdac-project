import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';
import LoginPage from './component/Login';
import Registeruser from './component/Registeruser';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from './component/Homepage';
import Customer from './component/Role/Customer';
import Owner from './component/Role/Owner';
import Admin from './component/Role/Admin';
import Edit_profile from './component/Role/Edit_profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registeruser" element={<Registeruser />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/owner" element={<Owner />} />
<<<<<<< HEAD
=======
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Edit_profile" element={<Edit_profile />} />



>>>>>>> 569c56333631b70abe08a8170560a33f0db785cc
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
