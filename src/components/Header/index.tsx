"use client";

import { header, divHeader, buttonNewPlate } from "./style.css";
import Image from "next/image";
import imgLogo from "../../../public/images/Logo.svg";
import { PiPlusSquareLight } from "react-icons/pi";

export const Header = () => {
  return (
    <header className={header}>
      <div className={divHeader}>
        <Image src={imgLogo} alt="logo do restaurante" />
        <button className={buttonNewPlate.primary}>
          Novo Prato <PiPlusSquareLight size="24px" />
        </button>
      </div>
    </header>
  );
};
