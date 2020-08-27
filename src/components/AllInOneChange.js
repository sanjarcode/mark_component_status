import React from "react";
import "../styles/AllInOneChange.css";

export default function AllInOneChange({ status_name, icon_src }) {
  return (
    <span className="AllInOneChange">
      {/* AllInOneChange Here */}
      <span className="status_name info">{status_name}</span>
      <span className="status_icon info">
        <img src={icon_src} width="4em" height="4em" alt="icon" />
      </span>
      <span className="flip_switch info">
        <input type="button" />
      </span>
      <span className="position_changer info">5</span>
    </span>
  );
}

// document.addEventListener(
//   "click",
//   function (e) {
//     // console.log(e.target);
//     alert(e.target.innerHTML)
//   },
//   false
// );
