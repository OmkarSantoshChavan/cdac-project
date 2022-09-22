import React from "react";
import Banner from "../Banner";
import Services from "../Services";
import Navbar from "../Navbar";

function Homepage(props) {

  const logoStyle = {
    width: "200px",
    height: "75px",
  };

  return (
    <>
    <Navbar/>
      <Banner/>
      <Services/>
    </>
  );
}
export default Homepage;
