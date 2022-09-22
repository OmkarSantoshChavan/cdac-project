import React from "react";
import '../src/Banner.css'

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>Luxurious Villa & Resort</h1>
      <div />
      <p>Make your holidays special with us .</p>
      {children}
    </div>
  );
}
