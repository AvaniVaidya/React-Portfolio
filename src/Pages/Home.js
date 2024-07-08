import React from "react";
import "../index.css";
import { Header } from "../index.js";

export default function Home() {
  return (
    <section className="bgimage" id="home">
      {/*<Header />*/}
      <div className="container">
        <section className="midSection">
          <p className="homeText">
            Hey there ! <br /> Hope you are doing great. <br />
            Please feel free to explore my page and
            <br /> hit me up if you find anything interesting.
          </p>
        </section>
      </div>
    </section>
  );
}
