import "./cardright.css";
import { MyStates } from "../hooks/states";
export function Cardright() {
  const { level, stge, month, day } = MyStates();
  return (
    <div class="container1">
      <div className="square1">
        <div className="Lv1">Lv.</div>
        <div className="level1">{level ? level : 99}</div>
      </div>
      <div className="yellowbackground">
        <div className="year1">2025</div>
        <div className="month1">{month ? month : "11."}</div>
        <div className="day1">{day ? day : "30"}</div>
      </div>

      <div className="smallsquare">
        <div className="STGE1">STGE</div>
        <div className="stgeValue1">{stge ? stge : 9}</div>
      </div>
      <div className="displaypart1">
        <span className="words1">
          bulabulabulabulabulabulabulabulabulabulabulabulabula
        </span>
      </div>
      <div className="shadow1"></div>
    </div>
  );
}
