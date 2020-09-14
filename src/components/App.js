import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";
import SettingsBody from "./SettingsBody";

export default function App() {
  let icon = "../images/icon_favorite.png";
  return (
    <div className="App">
      <h1 className="Heading">Settings</h1>
      <SettingsBody />
      <img src={require(`${icon}`)} alt="icon" />
    </div>
  );
}
