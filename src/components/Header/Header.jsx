import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/logo.svg";
import burgerMenu from "../../../public/icons/burger-menu.svg";

export const Header = ({ textTr }) => {
  return (
    <div className="layout flex justify-between bg-gradient-header py-2 mb-6">
      <Image src={logo} alt="logo" width={40} height={40} />
      <Image src={burgerMenu} alt="burgerMenu" width={40} height={40} />
    </div>
  );
};
