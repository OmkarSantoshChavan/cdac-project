import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Image } from "primereact/image";
import logo from "./Images/TravelBuddy.png";

function Homepage(props) {
  let { children } = props;

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/loginform`);
  };

  const handleRegister = () => {
    navigate(`/register`);
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

        <div className="access-grid">
          <Button
            label="Login"
            onClick={handleLogin}
            className="login-button"
          />
          <Button
            label="Register"
            onClick={handleRegister}
            className="register-button"
          />
        </div>
      </header>
      <main className='inner-grid-container'>{children}</main>
    </>
  );
}

Homepage.defaultProps = {
  list: [],
};

export default Homepage;
