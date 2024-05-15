import Image from "next/image";
import React from "react";
import logo from "../../../public/icons/logo.svg";
import logoYellow from "../../../public/icons/vector-yellow-mobile.svg";
import whatsapp from "../../../public/icons/whatsapp.svg";
import instagram from "../../../public/icons/instagram.svg";
import telegram from "../../../public/icons/telegram.svg";
import youtube from "../../../public/icons/youtube1.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import Link from "next/link";

export const Footer = ({ textTr }) => {
  return (
    <div className="relative bg-footer-gradient">
      <div className="layout">
        <div className="flex items-center mb-6">
          <Image src={logo} alt="logo" />
          <h2 className=" text-2xl font-corsa font-light uppercase w-[144px]">
            {textTr.footerTitle}
          </h2>
        </div>
        <ul className=" flex items-center mb-4">
          <li className="mr-6">
            <Link href="" target="blanc" className="">
              <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg  hover:bg-btn-active">
                <Image src={whatsapp} alt="whatsapp" />
              </div>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="https://www.instagram.com/" target="blanc" className="">
              <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg hover:bg-btn-active">
                <Image src={instagram} alt="instagram" />
              </div>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="" target="blanc" className="">
              <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg hover:bg-btn-active">
                <Image src={telegram} alt="telegram" />
              </div>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="https://www.youtube.com" target="blanc" className="">
              <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg hover:bg-btn-active">
                <Image src={youtube} alt="youtube" className="mb-0" />
              </div>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="https://www.tiktok.com/" target="blanc" className="">
              <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg hover:bg-btn-active">
                <Image src={tiktok} alt="tiktok" />
              </div>
            </Link>
          </li>
        </ul>
        <Image
          src={logoYellow}
          alt="logoYellow"
          className=" absolute -top-40 right-0"
        />
      </div>
      <div className="border-t border-dashed border-[#A68D6E] py-4">
        <p className=" font-corsa text-[#A68D6E] layout text-center">
          {textTr.footerDev}
        </p>
        <p className=" font-corsa text-[#A68D6E] lauout text-center">
          {textTr.footerRights}
        </p>
      </div>
    </div>
  );
};
