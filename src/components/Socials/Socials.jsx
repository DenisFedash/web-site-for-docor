import Image from "next/image";
import React from "react";
import whatsapp from "../../../public/icons/whatsapp.svg";
import instagram from "../../../public/icons/instagram.svg";
import telegram from "../../../public/icons/telegram.svg";
import youtube from "../../../public/icons/youtube.svg";
import tiktok from "../../../public/icons/tiktok.svg";
import Link from "next/link";

export const Socials = ({ textTr }) => {
  return (
    <div className="layout mb-20">
      <h2 className=" text-xl md:text-3xl font-corsa mb-8">
        {textTr.socialsTitle}
      </h2>
      <ul className="grid grid-cols-3 gap-5">
        <li>
          <Link
            href=""
            target="blanc"
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg mb-4 hover:bg-btn-active">
              <Image src={whatsapp} alt="whatsapp" />
            </div>
            <p className=" font-poiret md:text-3xl">WhatsApp</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/rita.gorbachova?igsh=MW0xODVraWJzbnVnNQ=="
            target="blanc"
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg mb-4 hover:bg-btn-active">
              <Image src={instagram} alt="instagram" />
            </div>
            <p className=" font-poiret md:text-3xl">Instagram</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://t.me/MargaretGrb"
            target="blanc"
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg mb-4hover:bg-btn-active">
              <Image src={telegram} alt="telegram" />
            </div>
            <p className=" font-poiret md:text-3xl">Telegram</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@Rita.Gorbacheva"
            target="blanc"
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg mb-4 hover:bg-btn-active">
              <Image src={youtube} alt="youtube" />
            </div>
            <p className=" font-poiret md:text-3xl">YouTube</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.tiktok.com/@rita.gorbacheva"
            target="blanc"
            className="flex flex-col items-center justify-center"
          >
            <div className=" bg-yellow-col p-2 w-9 h-9 rounded-lg mb-4 hover:bg-btn-active">
              <Image src={tiktok} alt="tiktok" />
            </div>
            <p className=" font-poiret md:text-3xl">TikTok</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
