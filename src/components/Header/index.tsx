'use client'

import { header, divHeader, buttonNewPlate } from "./style.css";
import Image from "next/image";
import imgLogo from '../../../public/images/Logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {


    return (
        <header className={header}>
            <div className={divHeader}>
                <Image src={imgLogo} alt="logo do restaurante" />
                <button className={buttonNewPlate}>Novo Prato <FontAwesomeIcon icon={faSquarePlus} /></button>
            </div>
        </header>
    )
}