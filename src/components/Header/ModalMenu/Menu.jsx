"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import rounds from "../../../../public/icons/red-mobile.svg";
import iconClose from "../../../../public/icons/close-btn.svg";
import logo from "../../../../public/icons/logo.svg";
import Link from "next/link";
import arrow from "../../../../public/icons/down-arrow.svg";
import { usePathname } from "next/navigation";

export const Menu = ({ textTr, setIsOpen }) => {
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

  return (
    <div className=" bg-[#fffefb] pb-16 ">
      <div className="layout flex justify-between bg-gradient-header py-2 mb-12 md:mb-16">
        <Image
          src={logo}
          alt="logo"
          width={40}
          height={40}
          className="md:w-[70px] md:h-[70px]"
        />
        <div>
          <Image
            src={iconClose}
            alt="iconClose"
            width={40}
            height={40}
            onClick={() => setIsOpen(false)}
            className="z-0 md:w-[70px] md:h-[70px]"
          />
        </div>
      </div>
      <ul className="layout">
        <li
          className=" border-b-2 border-dashed mb-8"
          onClick={() => setIsOpen(false)}
        >
          <Link href="#main">
            <h2 className="m-5 text-xl md:text-3xl font-corsa">
              {textTr.headerMain}
            </h2>
          </Link>
        </li>
        <li
          className=" border-b-2 border-dashed mb-8"
          onClick={() => setIsOpen(false)}
        >
          <Link href="#about">
            <h2 className="m-5 text-xl md:text-3xl font-corsa">
              {textTr.headerAbout}
            </h2>
          </Link>
        </li>
        <li
          className=" border-b-2 border-dashed mb-8"
          onClick={() => setIsOpen(false)}
        >
          <Link href="#consultations">
            <h2 className="m-5 text-xl md:text-3xl font-corsa">
              {textTr.headerConsultations}
            </h2>
          </Link>
        </li>
        <li
          className=" border-b-2 border-dashed mb-8"
          onClick={() => setIsOpen(false)}
        >
          <Link href="#contacts">
            <h2 className="m-5 text-xl md:text-3xl font-corsa">
              {textTr.headerContacts}
            </h2>
          </Link>
        </li>
        <li className=" border-b-2 border-dashed mb-2.5 relative">
          <button
            className="m-5 text-xl md:text-3xl font-corsa flex items-center "
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="">{selectedLanguage}</div>
            <div className=" absolute right-6">
              <Image
                src={arrow}
                alt="arrow"
                width={16}
                height={8}
                className="md:w-6 md:h-3.5"
              />
            </div>
          </button>
          {showMenu && (
            <div className="absolute top-10 right-0 bg-[#FFFEFB] shadow-md py-1 px-2 w-[117px] rounded-lg flex flex-col">
              {languages.map((language, index) => (
                <Link
                  href={`/${language.toLowerCase()}/${path}`}
                  key={index}
                  className="cursor-pointer hover:bg-yellow-col rounded-lg pl-2.5 text-xl md:text-3xl font-corsa py-2"
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>
      <Image
        src={rounds}
        alt="icon-rounds"
        className="ml-auto mr-auto md:w-[182px] md:h-[182px]"
      />
    </div>
  );
};
