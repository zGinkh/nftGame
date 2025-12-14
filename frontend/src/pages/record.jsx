import React from "react";
import { Card } from "../components/card.jsx";
import { Cardright } from "../components/cardright.jsx";
import { Pinksquare } from "../components/pinksquare.jsx";
import { Close } from "../components/close.jsx";
import { Background } from "../components/background.jsx";
import backImg from "../pages/4.png";
import closeImg from "../pages/3.png";
import leftImg from "../pages/1.png";
import rightImg from "../pages/2.png";
import "./record.css";

export function Record() {
  return (
    <div className="containerRecord">
      <div className="times">25 DAYs</div>
      <div className="username">name</div>
      <div className="black"></div>

      <div className="cardPos">
        <Card />
      </div>

      <button className="leftPos1">
        <img src={leftImg} alt="left" />
      </button>

      <button className="rightPos1">
        <img src={rightImg} alt="right" />
      </button>

      <div className="pinkPos">
        <Pinksquare />
      </div>

      <div className="bgPos">
        <Background />
      </div>

      <button className="editPos">
        <img src={closeImg} alt="close" />
      </button>

      <button className="closePos">
        <img src={backImg} alt="back" />
      </button>
    </div>
  );
}
