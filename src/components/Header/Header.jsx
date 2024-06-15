"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import logo from "../../../public/icons/logo.svg";
import burgerMenu from "../../../public/icons/burger-menu.svg";
import arrow from "../../../public/icons/down-arrow.svg";
import underline from "../../../public/icons/underline.svg";

import { Menu } from "./ModalMenu/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = ({ textTr }) => {
  const [activeItem, setActiveItem] = useState("main");
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    return storedLanguage ? storedLanguage : "RU";
  });
  const pathName = usePathname();
  const path = pathName.slice(4);

  const languages = useMemo(() => ["RU", "EN", "UA"], []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-center z-10">
      <div className="fixed bg-[#FFDF44] w-full top-0">
        <div className="layout flex justify-between py-2 ">
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
              <Link href="#main" onClick={() => handleItemClick("main")}>
                <h2 className="text-2xl font-corsa">
                  {textTr.headerMain}
                  {activeItem === "main" && (
                    <Image
                      src={underline}
                      alt="underline"
                      width={100}
                      height={10}
                    />
                  )}
                </h2>
              </Link>
            </li>
            <li className="mr-20 ">
              <Link href="#about" onClick={() => handleItemClick("about")}>
                <h2 className="text-2xl font-corsa">
                  {textTr.headerAbout}
                  {activeItem === "about" && (
                    <Image
                      src={underline}
                      alt="underline"
                      width={110}
                      height={10}
                    />
                  )}
                </h2>
              </Link>
            </li>
            <li className="mr-20 ">
              <Link
                href="#consultations"
                onClick={() => handleItemClick("consultations")}
              >
                <h2 className="text-2xl font-corsa">
                  {textTr.headerConsultations}
                  {activeItem === "consultations" && (
                    <Image
                      src={underline}
                      alt="underline"
                      width={170}
                      height={10}
                    />
                  )}
                </h2>
              </Link>
            </li>
            <li className="mr-20 ">
              <Link href="#formMes" onClick={() => handleItemClick("formMes")}>
                <h2 className="text-2xl font-corsa">
                  {textTr.headerContacts}
                  {activeItem === "formMes" && (
                    <Image
                      src={underline}
                      alt="underline"
                      width={120}
                      height={10}
                    />
                  )}
                </h2>
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
      </div>

      <div
        className={
          isOpen ? "top-0 z-10 fixed overflow-auto max-h-full" : "hidden"
        }
      >
        <Menu textTr={textTr} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
