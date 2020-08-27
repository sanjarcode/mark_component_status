import React from "react";
import "../styles/SettingsBody.css";
import SmartContextMode from "./SmartContextMode";
import AllInOneChangeContainer from "./AllInOneChangeContainer";

export default function SettingsBody() {
  return (
    <div className="SettingsBody">
      {/* <h1>Settings body here</h1> */}
      <SmartContextMode />
      <AllInOneChangeContainer />
    </div>
  );
}
