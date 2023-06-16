import React from "react";
import "../CSS/drawer.css";

export default function DrawerMenu({ setIsMenu, isMenu }) {
  function handleMenu() {
    setIsMenu((isMenu) => !isMenu);
  }
  return (
    <span
      className="flex flex-col justify-between animation"
      onClick={() => handleMenu()}
    >
      <p
        className={!isMenu ? "border-black border-2 w-5 " : "top_deg_border"}
      ></p>
      <p className={!isMenu ? "border-black border-2 w-5 my-1" : "hidden"}></p>
      <p
        className={!isMenu ? "border-black border-2 w-5" : "bottom_deg_border"}
      ></p>
    </span>
  );
}
