import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import Registeruser from './component/Registeruser';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from './component/Homepage';
import Customer from './component/Role/Customer';
import Owner from './component/Role/Owner';
import Admin from './component/Role/Admin';
import Edit_profile from './component/Role/Edit_profile';
import Add_property from './component/Property/Add_property';
import LoginForm from './component/LoginForm';
import Register from './component/Register';
import Image from './assets/Photos/Hotel.jpg';
import ViewProperties from './component/Role/ViewProperties';

function App() {
  
  const appStyles = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: 'auto'
  };
  
  return (
    <div className="App"  style={appStyles}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registeruser" element={<Registeruser />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/edit_profile" element={<Edit_profile />} />
            <Route path="/add_property" element={<Add_property />} />
            <Route path="/viewproperty" element={<ViewProperties />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
