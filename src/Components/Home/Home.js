import React from "react";
import "./Home.css";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  return (
    <>
      <div id="divLanding">
        <div id="divSlogan">
          <h1>Lorem Ipsum</h1>
          <div id="slogan">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </div>
          <div id="btnDiv">
            <button id="btnClickHere">Click Here</button>
          </div>
        </div>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/3BmR19c/landingpage1920x1280.jpg"
            alt="Courier Guy"
            border="0"
            id="courierGuy"
          ></img>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default Home;
