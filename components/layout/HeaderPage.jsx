import React from 'react'
import MenuPage from './GlobalMenu'
import Link  from 'next/link'
function HeaderPage() {
  return (
    <header className="flex flex-col w-full md:flex-row justify-between justify-items-center items-center py-3 px-5">
      <div className="w-2/4">
        <Link href="/"><a><h1 className="text-3xl text-bold uppercase">Bigo Tools</h1></a></Link>
        <h2 className="text-lg">Herramientas Para Emisores Latam</h2>
      </div>
          <MenuPage/>
    </header>
  )
}

export default HeaderPage