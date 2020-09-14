import React from "react";
import "../styles/AllInOneChangeContainer.css";
import AllInOneChange from "./AllInOneChange";
import { status_data, icon_path } from "./status_data";

export default function AllInOneChangeContainer() {
  let minWidthOfName = -1;
  status_data.forEach(({ status_name }) => {
    minWidthOfName = Math.max(minWidthOfName, status_name.length);
  });
  console.log(minWidthOfName + "0px");
  return (
    <div className="AllInOneChangeContainer">
      {status_data.map((entry) => (
        <AllInOneChange
          status_name={entry.status_name}
          status_name_width={minWidthOfName + "em"}
          icon_src={icon_path + entry.status_icon}
        />
      ))}
    </div>
  );
}
