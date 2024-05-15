"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/icons/logo.svg";
import burgerMenu from "../../../public/icons/burger-menu.svg";

import { Menu } from "./ModalMenu/Menu";

export const Header = ({ textTr }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative z-10">
      <div className="layout flex justify-between bg-gradient-header py-2 fixed z-0">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="md:w-[70px] md:h-[70px]"
        />
        <div>
          <Image
            src={burgerMenu}
            alt="burgerMenu"
            width={40}
            height={40}
            onClick={() => setIsOpen(true)}
            className="md:w-[70px] md:h-[70px]"
          />
        </div>
      </div>

      <div
        className={
          isOpen ? "top-0 left-0 z-10 fixed overflow-auto max-h-full" : "hidden"
        }
      >
        <Menu textTr={textTr} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
