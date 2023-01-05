import React, {useCallback, useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {FaBars} from 'react-icons/fa'
const routes = [{
    priority: 1,
    name: 'Inicio',
    uri: '/',
    available:true
},{
    priority: 3,
    name: '🧰 Herramienta: Apoyo Cruzado',
    uri: '/apoyo_cruzado',
    available:true
},{
    priority: 2,
    name: '🧰 Herramienta: Apoyo Extranjero',
    uri: '/apoyo_extranjero',
    available:true
}]
function GlobalMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const route = useRouter();
    useEffect(() => {
        return ()=>setIsOpen(!isOpen)
    }, [route])
  return (
      <nav className="w-2/4">
          <span className="absolute top-4 right-4 z-10 py-2 px-2" onClick={handleMenu}>
              <FaBars />
          </span>
          <div className={isOpen? "block absolute top-0 right-0":"hidden"}>
              
          <ul className="flex w-full h-screen pt-8 md:h-3/4 flex-col py-3 px-2 bg-black">
              {routes.filter((route)=> route.available === true).map((route) => {
                  return <li key={route.priority}>
                      <Link href={route.uri} >
                          <a className="block px-1 py-1 text-center">
                              {route.name}
                          </a>
                      </Link>
                  </li>
              })}
          </ul>
              </div>
    </nav>
  )
}

export default GlobalMenu