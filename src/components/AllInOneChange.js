import React from "react";
import "../styles/AllInOneChange.css";

export default function AllInOneChange({
  status_name,
  icon_src,
  status_name_width,
}) {
  let ions = icon_src;
  return (
    <div className="AllInOneChange">
      {/* AllInOneChange Here */}
      <div
        className="status_name"
        style={{ minWidth: String(status_name_width) }}
      >
        {status_name}
      </div>
      <div className="status_icon">
        <img
          // src={require(icon_src)}
          alt="icon"
        />
      </div>
      <div className="flip_switch ">
        <input type="button" />
      </div>
      <div className="position_changer info">5</div>
    </div>
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
