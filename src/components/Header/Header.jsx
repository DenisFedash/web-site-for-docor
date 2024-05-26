"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import logo from "../../../public/icons/logo.svg";
import burgerMenu from "../../../public/icons/burger-menu.svg";
import arrow from "../../../public/icons/down-arrow.svg";

import { Menu } from "./ModalMenu/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = ({ textTr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    return storedLanguage ? storedLanguage : "RU";
  });
  const pathName = usePathname();
  const path = pathName.slice(4);

  const languages = useMemo(() => ["RU", "EN", "UA"], []);

  const handleLanguageChange = (language) => {
    localStorage.setItem("selectedLanguage", language);
    setSelectedLanguage(language);
    setShowMenu(false);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && languages.includes(storedLanguage)) {
      setSelectedLanguage(storedLanguage);
    }
  }, [languages]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative z-10 flex justify-center">
      <div className="layout flex justify-between bg-gradient-header py-2 fixed z-0">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="md:w-[70px] md:h-[70px] lg:w-[113px] lg:h-[113px] "
        />
        <div>
          <Image
            src={burgerMenu}
            alt="burgerMenu"
            width={40}
            height={40}
            onClick={() => setIsOpen(true)}
            className="md:w-[70px] md:h-[70px] lg:hidden"
          />
        </div>

        <ul className="sm:hidden lg:flex justify-between items-center">
          <li className="mr-20">
            <Link href="#main">
              <h2 className="text-2xl font-corsa">{textTr.headerMain}</h2>
            </Link>
          </li>
          <li className="mr-20 ">
            <Link href="#about">
              <h2 className="text-2xl font-corsa">{textTr.headerAbout}</h2>
            </Link>
          </li>
          <li className="mr-20 ">
            <Link href="#consultations">
              <h2 className="text-2xl font-corsa">
                {textTr.headerConsultations}
              </h2>
            </Link>
          </li>
          <li className="mr-20 ">
            <Link href="#contacts">
              <h2 className="text-2xl font-corsa">{textTr.headerContacts}</h2>
            </Link>
          </li>
          <li className=" relative">
            <button
              className="mr-14 font-corsa flex items-center text-2xl"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="">{selectedLanguage}</div>
              <div className=" absolute right-6 border border-dashed p-2 rounded-lg hover:bg-yellow-col">
                <Image
                  src={arrow}
                  alt="arrow"
                  width={10}
                  height={13}
                  className=""
                />
              </div>
            </button>
            {showMenu && (
              <div className="absolute top-10 right-0 bg-[#FFFEFB] shadow-md py-1 px-2 w-[117px] rounded-lg flex flex-col">
                {languages.map((language, index) => (
                  <Link
                    href={`/${language.toLowerCase()}/${path}`}
                    key={index}
                    className="cursor-pointer hover:bg-yellow-col rounded-lg pl-2.5 text-xl font-corsa py-2"
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>
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
