import React,{useState} from "react";
import Link from "next/link";
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'

function HeaderPage() {
  return (<footer className="container mx-auto py-1 px-2">
          <span>Si tienen alguna sugerencia o algo que quisieran que implementen me pueden mandar a <Link href="https://slink.bigovideo.tv/KWIO3G"><a>Sr. Daniel en Bigo</a></Link></span>
  </footer>);
}

export default HeaderPage;
