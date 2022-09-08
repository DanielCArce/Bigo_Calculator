import React from "react";
import Link from "next/link";
import {} from "react-icons";
function HeaderPage() {
  return (
    <header className="flex flex-row place-content-between py-4 px-2">
      <div>
        <h1 className="text-3xl font-bold">Bigo Calculador</h1>
        <h2 className="text-xl font-medium">Herramientas simples que ayudan</h2>
      </div>
      <nav>
        <ul className="flex flex-row">
          <li>
            <Link href="/">
              <a className="block px2-2 py-1 hover:border-b-2">Inicio</a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/LatamPercentageCalculate">
              <a className="block px2-2 py-1 hover:border-b-2">
                Herramienta: Porcentaje Latam
              </a>
            </Link>
          </li>
          <li className="ml-2">
            <Link href="/ExchangeCalculate">
              <a className="block px2-2 py-1 hover:border-b-2">
                Herramienta: Intercambio Semillas
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderPage;
