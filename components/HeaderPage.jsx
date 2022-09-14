import React,{useState} from "react";
import Link from "next/link";
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'

function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className="flex flex-row place-content-between py-4 px-2">
      <div>
        <h1 className="text-3xl font-bold">Bigo Calculador</h1>
        <h2 className="text-xl font-medium">Herramientas simples que ayudan</h2>
      </div>
      <nav>
        <span
          className="lg:hidden md:hidden sm:hidden xsm:flex"
          onClick={handleMenu}
        >
          {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
        </span>
        <ul className={`flex lg:flex-row md:flex md:flex-row`}>
          <li>
            <Link href="/">
              <a className="block px2-2 py-1 hover:border-b-2">Inicio</a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/porcentaje_latam">
              <a className="block px2-2 py-1 hover:border-b-2">
                Herramienta: Porcentaje Latam
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/intercambio_semillas_diamantes">
              <a className="block px2-2 py-1 hover:border-b-2">
                Herramienta: Intercambio Semillas
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/apoyo_cruzado">
              <a className="block px2-2 py-1 hover:border-b-2">
                Herramienta: Apoyo Cruzado
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderPage;
