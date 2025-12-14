import "./card.css";
import { MyStates } from "../hooks/states";

export function Card() {
  const { level, stge, month, day } = MyStates();
  return (
    <>
      <div className="wholeCard">
        <div className="square">
          <div className="Lv">Lv.</div>
          <div className="level">{level ? level : 99}</div>
        </div>
        <div className="row_rectangle">
          <div className="STGE">STGE</div>
          <div className="stgeValue">{stge ? stge : 9}</div>
        </div>
        <div className="column_rectangle">
          <div className="year">2025</div>
          <div className="month">{month ? month : "11."}</div>
          <div className="day">{day ? day : "30"}</div>
        </div>
        <div className="displayPart">
          <span className="words">
            bulabulabulabulabulabulabulabulabulabulabulabulabula
          </span>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}
