import React from "react";
import "../styles/AllInOneChangeContainer.css";
import AllInOneChange from "./AllInOneChange";
import { status_data, icon_path } from "./status_data";

export default function AllInOneChangeContainer() {
  return (
    <div className="AllInOneChangeContainer">
      {/* AllInOneChangeContainer Here */}
      {/* <AllInOneChange
        status="Finished"
        icon_src={icon_address + "icon_favorite.png"}
      />
      <AllInOneChange
        status="Important"
        icon_src={icon_address + "icon_ongoing"}
      />
      <AllInOneChange
        status="Ongoing"
        icon_src={icon_address + "icon_favorite.png"}
      />
      <AllInOneChange
        status="Favorite"
        icon_src={icon_address + "icon_favorite.png"}
      />
      <AllInOneChange
        status="New"
        icon_src={icon_address + "icon_favorite.png"}
      /> */}
      {status_data.map((entry) => (
        <AllInOneChange
          status_name={entry.status_name}
          icon_src={icon_path + entry.status_icon}
        />
      ))}
    </div>
  );
}
