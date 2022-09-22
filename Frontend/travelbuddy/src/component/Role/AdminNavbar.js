import React from "react";
import { Button } from "primereact/button";
import { useNavigate , Link} from "react-router-dom";
import { Image } from "primereact/image";
import logo from "../Images/TravelBuddy.png";
function AdminNavbar(props) {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(`/loginform`);
  };

  const logoStyle = {
    width: "200px",
    height: "75px",
  };


  return (
    <>
      <header className="homepage-header">
        <div>
          <Image src={logo} imageStyle={logoStyle}  onClick={()=>{navigate('/')}}/>
        </div>

        {/* <div className="card">
                <Carousel value={list} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={productTemplate} header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>}/>
            </div> */}

        <div className="admin_navbar">
          <Button
            label="Logout"
            onClick={handleLogout}
            className="register-button"
          />
        </div>
      </header>
    </>
  );
}

export default AdminNavbar;