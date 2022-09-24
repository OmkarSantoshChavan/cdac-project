import React from "react";
import { Button } from "primereact/button";
import { useNavigate , Link} from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../src/component/Images/TravelBuddy.png";
function Navbar(props) {

  const navigate = useNavigate();


  const handleaboutus = () => {
    navigate(`/aboutus`);
  };

  const handlecontactus = () => {
    navigate(`/contactus`);
  };
  const handleloginuser = () => {
    navigate(`/loginform`);
  };



  const logoStyle = {
    width: "200px",
    height: "75px",
  };


  return (
    <>
      <header className="homepage-header">
        <>
        <div>
          <Image src={logo} imageStyle={logoStyle}  onClick={()=>{navigate('/')}}/>
        </div>

        <div className="admin_navbar">
          <Button
            label="Login"
            onClick={handleloginuser}
            className="register-button"
          />
        </div>

        <div className="admin_navbar">
          <Button
            label="About us"
            onClick={handleaboutus}
            className="register-button"
          />
        </div>

        <div className="admin_navbar">
          <Button
            label="Contact Us"
            onClick={handlecontactus}
            className="register-button"
            style={{fontSize:'13px'}}
          />
        </div>
        </>
      </header>
    </>
  );
}

export default Navbar;