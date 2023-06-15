import React, { useState } from "react";
import logo from "../asset/예시로고.png";
import DrawerMenu from "../components/DrawerMenu";
import DrawerMenuContent from "../components/DrawerMenuContent";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center ">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <p className="ml-2">logo</p>
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <DrawerMenu isMenu={isMenu} setIsMenu={setIsMenu} />
          <button className="ml-2">log-in</button>
        </div>
      </header>
      {isMenu && <DrawerMenuContent />}
    </>
  );
}
