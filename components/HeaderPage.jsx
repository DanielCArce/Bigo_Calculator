import React,{useState} from "react";
import Link from "next/link";
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'

function HeaderPage() {
  const [isOpen, setIsOpen] = useState(false);
  const styles = +isOpen
    ? "z-0 flex flex-col absolute w-3/4 bg-black h-screen py-4 px-1 top-0 right-0"
    : "flex-row hidden lg:flex md:flex sm:flex";
  const handleMenu = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className="flex flex-row place-content-between py-4 px-2 relative">
      <div>
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold">Bigo Calculador</h1>
          </a>
        </Link>
        <h2 className="text-xl font-medium">Herramientas simples que ayudan</h2>
      </div>
      <nav>
        <span
          className="block absolute lg:hidden md:hidden z-10 right-7 top-7"
          onClick={handleMenu}
        >
          {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
        </span>
        <ul className={styles}>
          <li>
            <Link href="/">
              <a className="block text-center px-2 py-1 hover:border-b-2">
                Inicio
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/porcentaje_latam">
              <a className="block text-center px-2 py-1 hover:border-b-2">
                Herramienta: Porcentaje Latam
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/intercambio_semillas_diamantes">
              <a className="block text-center px-2 py-1 hover:border-b-2">
                Herramienta: Intercambio Semillas
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/apoyo_cruzado">
              <a className="block text-center px-2 py-1 hover:border-b-2">
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
