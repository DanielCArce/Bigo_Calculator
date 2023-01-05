import React from 'react'
import MenuPage from './GlobalMenu'
function HeaderPage() {
  return (
    <header className="flex flex-col w-full md:flex-row justify-between justify-items-center items-center py-3 px-5">
      <div className="w-2/4">
        <h1 className="text-3xl text-bold uppercase">Bigo Tools</h1>
        <h2 className="text-lg">Herramientas Para Emisores Latam</h2>
      </div>
          <MenuPage/>
    </header>
  )
}

export default HeaderPage