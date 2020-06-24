import React from "react";
import "./main.css";
import Lamp1 from "./img/1.jpeg";
import Lamp2 from "./img/2.jpeg";
import Lamp3 from "./img/3.jpeg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="Main-section1">
        <AwesomeSlider>
          <div data-src={Lamp1} />
          <div data-src={Lamp2} />
          <div data-src={Lamp3} />
        </AwesomeSlider>
      </div>
      <div className="Main-section2">
        <div>Burger working</div>
        <div>Slider working</div>
        <div>Half responsive</div>
        <div>Some thing</div>
        <div>Some thing</div>
        <div>Some thing</div>
        <div className="Button-all">
          <button className="Button-info">i</button>
          <button className="Button-choose">Choose color of light</button>
        </div>
        <div className="images-lists">
          <img onClick="" className="images-list" src={Lamp1} alt="" />
          <img onClick="" className="images-list" src={Lamp2} alt="" />
          <img onClick="" className="images-list" src={Lamp3} alt="" />
        </div>
      </div>
    </div>
  );
}
