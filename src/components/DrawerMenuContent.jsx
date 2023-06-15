import React from "react";
import "../CSS/drawer.css";

export default function DrawerMenuContent() {
  return (
    <div className="flex flex-col text-center mt-4 drawer_menu_content">
      <div className="w-full bg-white border-2 border-gray-600 hover:text-indigo-500 hover:cursor-pointer">
        menu1
      </div>
      <div className="w-full bg-white border-2 border-gray-600  hover:text-indigo-500 hover:cursor-pointer">
        menu2
      </div>
      <div className="w-full bg-white border-2 border-gray-600 hover:text-indigo-500 hover:cursor-pointer">
        menu3
      </div>
    </div>
  );
}
